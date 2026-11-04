import type { ReactNode } from "react";

/** The compact chrome labels the panel; controls inside it remain real UI. */
export function ExplorerWindow({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-label={title} className="explorer-workspace-window">
      <div className="explorer-titlebar" aria-hidden="true">
        <span className="explorer-window-mark">g.</span>
        <span>{title}</span>
        <span className="explorer-titlebar-path">github.com / network</span>
        <span className="explorer-titlebar-indicator" />
      </div>
      {children}
    </section>
  );
}
