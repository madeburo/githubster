import { useCallback, useEffect, useRef, useState } from "react";
import {
  getNetwork,
  GitHubApiError,
  type FollowData,
  type LoadingProgress,
  type ProfileOverview,
  type RateLimitInfo,
} from "./github";

type SearchRequest = { user: string; token?: string };

function toApiError(error: unknown): GitHubApiError {
  if (error instanceof GitHubApiError) return error;
  return new GitHubApiError("unknown", error instanceof Error ? error.message : "Something went wrong");
}

/** Owns the GitHub network lookup: fetching, cancellation, and the `?user=` URL state. */
export function useNetworkSearch() {
  const [data, setData] = useState<FollowData | null>(null);
  const [profileOverview, setProfileOverview] = useState<ProfileOverview | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [rateLimit, setRateLimit] = useState<RateLimitInfo | null>(null);
  const [progress, setProgress] = useState<LoadingProgress | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<GitHubApiError | null>(null);
  const [lastSearch, setLastSearch] = useState<SearchRequest | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const search = useCallback(async (user: string, token?: string) => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setIsLoading(true);
    setError(null);
    setData(null);
    setProfileOverview(null);
    setProgress(null);
    setLastSearch({ user, token });

    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set("user", user);
    window.history.pushState({}, "", url.toString());

    try {
      const { profile, data: result, overview } = await getNetwork(user, token, controller.signal, (p) => setProgress(p));
      setData(result);
      setProfileOverview(overview);
      setUsername(profile.login);
      if (result.rateLimit) {
        setRateLimit(result.rateLimit);
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return; // silently ignore aborted requests
      }
      setError(toApiError(err));
    } finally {
      if (abortControllerRef.current === controller) {
        setIsLoading(false);
        setProgress(null);
      }
    }
  }, []);

  const retry = useCallback(() => {
    if (lastSearch) void search(lastSearch.user, lastSearch.token);
  }, [lastSearch, search]);

  /** Returns the explorer to its idle state and drops `?user=` from the URL. */
  const reset = useCallback(() => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setIsLoading(false);
    setError(null);
    setData(null);
    setProfileOverview(null);
    setUsername(null);
    setProgress(null);

    const url = new URL(window.location.href);
    if (url.searchParams.has("user")) {
      url.searchParams.delete("user");
      window.history.pushState({}, "", url.toString());
    }
  }, []);

  // Read username from URL on mount
  useEffect(() => {
    const userFromUrl = new URLSearchParams(window.location.search).get("user");
    if (!userFromUrl) return;

    const timeoutId = window.setTimeout(() => {
      void search(userFromUrl);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [search]);

  return { data, profileOverview, username, rateLimit, progress, isLoading, error, search, retry, reset };
}
