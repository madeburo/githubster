import type { ReactNode } from "react";
import { DesktopBackground, type BackgroundVariant } from "./desktop-background";

interface AppShellProps {
  header: ReactNode;
  children: ReactNode;
  /** Content rendered on an opaque sheet that slides over the wallpaper (SEO copy, footer). */
  footer?: ReactNode;
  background?: BackgroundVariant;
}

/** Page frame for the desktop experience: fixed wallpaper, header, workspace, and lower sheet. */
export function AppShell({ header, children, footer, background = "desk" }: AppShellProps) {
  return (
    <div className="relative isolate flex min-h-dvh flex-col">
      <DesktopBackground variant={background} />
      <div className="mx-auto w-full max-w-[1680px] px-4 pt-4 sm:px-6 sm:pt-5">{header}</div>
      {children}
      {footer && (
        <div className="mt-auto rounded-t-[2rem] border-t border-line bg-canvas shadow-[0_-24px_60px_-40px_rgba(60,45,150,0.35)] sm:rounded-t-[2.5rem]">
          {footer}
        </div>
      )}
    </div>
  );
}
