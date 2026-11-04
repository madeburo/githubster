import type { ReactNode } from "react";
import { ExternalLinkIcon } from "@/components/icons";
import { cx, focusRing } from "@/lib/ui";

/** Shared frame for the example preview and live results inside the explorer window. */
export function NetworkPanel({
  heading,
  aside,
  children,
}: {
  heading: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="workspace-network-panel">
      <div className="workspace-network-header">
        <div className="flex min-w-0 flex-wrap items-center gap-2.5">
          {heading}
        </div>
        {aside && <div className="min-w-0 max-w-full sm:ms-auto">{aside}</div>}
      </div>
      {children}
    </div>
  );
}

export function PublicProfileBadge({
  login,
  label,
}: {
  login: string;
  label: string;
}) {
  return (
    <a
      href={`https://github.com/${encodeURIComponent(login)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(
        "tap-target inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200/80 transition-colors hover:bg-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20 dark:hover:bg-emerald-400/15",
        focusRing,
      )}
    >
      {label}
      <ExternalLinkIcon size={12} />
    </a>
  );
}
