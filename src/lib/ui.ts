/** Shared soft, rounded control styling used by the header actions. */
export const pillClass =
  "tap-target inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full border border-line bg-card/85 px-3.5 text-[13px] font-medium text-fg-muted shadow-[var(--shadow)] backdrop-blur-md transition-[color,border-color,transform] hover:border-brand/40 hover:text-fg active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/** Focus ring for custom interactive surfaces. */
export const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
