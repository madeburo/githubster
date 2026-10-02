"use client";

import { FollowersIcon } from "@/components/icons";
import type { GitHubApiError, GitHubErrorCode } from "@/lib/github";
import { useLocale } from "@/lib/locale-context";
import { searchErrorLabels } from "@/lib/search-error-content";
import { cx, focusRing } from "@/lib/ui";

function StatusCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-3xl border border-line bg-card px-6 py-8 text-center shadow-[var(--shadow)] animate-fade-in">
      {children}
    </div>
  );
}

type Tone = "danger" | "warning" | "neutral";

export function SearchError({
  error,
  isLoading,
  onRetry,
  onAddToken,
}: {
  error: GitHubApiError;
  isLoading: boolean;
  onRetry: () => void;
  onAddToken: () => void;
}) {
  const { t, locale } = useLocale();
  const labels = searchErrorLabels[locale];

  const views: Record<GitHubErrorCode, { title: string; description: string; tone: Tone; offerToken?: boolean }> = {
    not_found: { title: t.error.userNotFound, description: t.error.userNotFoundDesc, tone: "danger" },
    invalid_username: { title: labels.usernameTitle, description: labels.usernameDesc, tone: "danger" },
    rate_limit: { title: t.error.rateLimit, description: t.error.rateLimitDesc, tone: "warning", offerToken: true },
    too_large: {
      title: labels.tooLargeTitle,
      description: labels.tooLargeDesc
        .replace("{needed}", (error.budget?.needed ?? 0).toLocaleString(locale))
        .replace("{remaining}", (error.budget?.remaining ?? 0).toLocaleString(locale)),
      tone: "warning",
      offerToken: true,
    },
    bad_token: { title: labels.tokenTitle, description: labels.tokenDesc, tone: "warning", offerToken: true },
    network: { title: labels.networkTitle, description: labels.networkDesc, tone: "neutral" },
    unknown: { title: labels.genericTitle, description: error.message, tone: "neutral" },
  };
  const { title, description, tone, offerToken } = views[error.code];
  const notFound = tone === "danger";
  const rateLimited = tone === "warning";

  return (
    <div role="alert">
      <StatusCard>
        <div
          className={cx(
            "flex size-12 items-center justify-center rounded-full",
            notFound ? "bg-red-500/10 text-red-500" : rateLimited ? "bg-amber-500/10 text-amber-500" : "bg-brand-soft text-brand"
          )}
        >
          {notFound ? (
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          ) : rateLimited ? (
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          ) : (
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          )}
        </div>
        <div>
          <h3 className="text-sm font-semibold text-fg">{title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-fg-muted">{description}</p>
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-2 empty:hidden">
          {/* A wrong or malformed username will not succeed on a second try. */}
          {!notFound && (
            <button
              type="button"
              onClick={onRetry}
              disabled={isLoading}
              className={cx(
                "inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-line bg-card-hover px-5 py-2 text-xs font-medium text-fg transition-transform active:scale-[0.98] disabled:opacity-50",
                focusRing
              )}
            >
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
              {t.error.retry}
            </button>
          )}
          {offerToken && (
            <button
              type="button"
              onClick={onAddToken}
              className={cx("cursor-pointer rounded-xl bg-(--cta-from) px-5 py-2 text-xs font-medium text-white transition-[filter] hover:brightness-110", focusRing)}
            >
              {t.search.tokenToggle}
            </button>
          )}
        </div>
      </StatusCard>
    </div>
  );
}

export function EmptyNetwork() {
  const { t } = useLocale();

  return (
    <StatusCard>
      <div className="flex size-12 items-center justify-center rounded-full bg-brand-soft text-brand">
        <FollowersIcon size={24} />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-fg">{t.error.noPublicFollowers}</h3>
        <p className="mt-1 text-xs text-fg-muted">{t.error.noPublicFollowersDesc}</p>
      </div>
    </StatusCard>
  );
}
