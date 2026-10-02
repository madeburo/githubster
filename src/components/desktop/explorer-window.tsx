import type { ReactNode } from "react";

/**
 * App-window chrome for the explorer. The title bar and stickers are decorative, so on phones the
 * window collapses into a plain card instead of simulating a desktop.
 */
export function ExplorerWindow({ title, decorated = true, children }: { title: string; decorated?: boolean; children: ReactNode }) {
  return (
    <section
      aria-label={title}
      className="relative rounded-3xl border border-window-line bg-window shadow-[var(--window-shadow)] animate-fade-in sm:rounded-[1.75rem] lg:backdrop-blur-xl"
    >
      <div aria-hidden="true" className="hidden h-11 items-center gap-4 border-b border-line/70 px-4 sm:flex">
        <span className="flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="text-[13px] font-medium text-fg-muted">{title}</span>
        <span className="ms-auto flex items-center gap-5 text-fg-subtle">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M1.5 6h9" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="1.5" y="1.5" width="9" height="9" rx="1.5" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="m2 2 8 8M10 2l-8 8" />
          </svg>
        </span>
      </div>
      <div className="relative">
        {decorated && <WindowDecorations />}
        {children}
      </div>
    </section>
  );
}

function WindowDecorations() {
  return (
    <div aria-hidden="true" dir="ltr" className="pointer-events-none absolute inset-x-0 top-0 hidden h-80 overflow-hidden lg:block">
      {/* Sticky note */}
      <div className="absolute start-7 top-9 w-32 bg-[#fdf1a6] px-4 pb-4 pt-5 font-hand text-[22px] leading-[1.05] text-[#4b4431] shadow-[0_14px_24px_-14px_rgba(90,70,0,0.55)] [--float-rotate:-7deg] animate-float-soft dark:bg-[#e8dc92] dark:opacity-90">
        <span className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rotate-3 bg-white/60 dark:bg-white/30" />
        Open
        <br />
        Source
        <br />
        People
        <br />
        &lt;3
        <svg className="mt-1 w-16" viewBox="0 0 64 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <path d="M2 5c8-3 14 2 22-1s14-2 22 0 10-1 16-2" />
        </svg>
      </div>

      {/* Handwritten note */}
      <p className="absolute end-9 top-10 -rotate-[8deg] font-hand text-[22px] leading-[1.1] text-fg-muted/80">
        Better
        <br />
        GitHub connections
        <svg className="ms-auto mt-1 me-6 w-6 text-brand/70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
        </svg>
      </p>

      {/* Octocat watermark */}
      <svg className="absolute -end-10 top-36 hidden w-56 text-brand opacity-[0.07] xl:block" viewBox="60 100 390 330" fill="currentColor">
        <path d="M409.67,185.66c3.9-11.85,5.89-24.31,5.89-36.85,0-16.44-3.67-24.69-11.16-39.6-34.25,0-56.42,6.5-82.42,26.91-20.03-4.82-40.83-7.03-61.47-7.03-22.86,0-45.64,2.37-67.81,7.65-26.38-20.64-48.55-27.52-83.18-27.52-7.42,14.91-11.16,23.17-11.16,39.6,0,12.54,1.91,25.23,5.89,37.31-21.1,24.54-31.73,54.82-31.73,86.85,0,24.39,4.28,50.46,15.44,72.63,30.12,59.25,114.53,57.19,172.48,57.19s136.7,1.38,165.67-57.19c10.93-22.4,13.38-48.24,13.38-72.63,0-32.03-8.79-62.54-29.82-87.31ZM275.19,389.02h-36.85c-53.52,0-114.98-10.32-114.98-77.45,0-33.56,20.41-63.15,56.19-63.15,14.53,0,28.52,2.6,42.81,4.59,11.47,1.76,22.86,2.45,34.48,2.45s23.09-.69,34.48-2.45c14.53-1.99,28.36-4.59,42.81-4.59,35.78,0,56.19,29.59,56.19,63.15,0,67.2-61.39,77.45-115.14,77.45Z" />
        <path d="M186.73,269.45c-19.72,0-28.06,26.15-28.06,42.13s8.33,42.13,28.06,42.13,28.06-26.15,28.06-42.13-8.33-42.13-28.06-42.13Z" />
        <path d="M327.18,269.45c-19.72,0-28.06,26.15-28.06,42.13s8.33,42.13,28.06,42.13,28.06-26.15,28.06-42.13-8.33-42.13-28.06-42.13Z" />
      </svg>
    </div>
  );
}
