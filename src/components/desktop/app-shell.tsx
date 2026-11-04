import type { ReactNode } from "react";

interface AppShellProps {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export function AppShell({ header, children, footer }: AppShellProps) {
  return (
    <div className="network-workspace relative isolate flex min-h-dvh flex-col">
      <div aria-hidden="true" className="workspace-backdrop" />
      <div className="workspace-header">{header}</div>
      {children}
      {footer && (
        <div className="workspace-footer mt-auto border-t border-line bg-canvas">
          {footer}
        </div>
      )}
    </div>
  );
}
