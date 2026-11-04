import { HeartIcon } from "@/components/icons";
import { cx } from "@/lib/ui";

/** One support mark across navigation and the support card. Motion follows the OS preference. */
export function SupportHeart({
  size = 17,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={cx("support-heart", className)}>
      <HeartIcon size={size} className="support-heart-icon" />
    </span>
  );
}
