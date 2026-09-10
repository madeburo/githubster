/**
 * Background variants:
 * - "desk": illustrated workspace (light pastel desk / dark night desk, switched by theme) on large screens,
 *   falling back to the minimal gradient below `lg` where the illustration would be cropped.
 * - "minimal": clean pastel gradient with a faint pixel pattern at every size.
 */
export type BackgroundVariant = "desk" | "minimal";

export function DesktopBackground({ variant = "desk" }: { variant?: BackgroundVariant }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="desktop-wallpaper absolute inset-0" data-variant="minimal" />
      <div className="desktop-sparkles absolute inset-0" />
      {variant === "desk" && <div className="desktop-wallpaper absolute inset-0 hidden lg:block" data-variant="desk" />}
      {/* Soft veil keeps the central window readable over the illustration. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_40%,var(--bg)_0%,transparent_100%)] opacity-60 dark:opacity-50" />
    </div>
  );
}
