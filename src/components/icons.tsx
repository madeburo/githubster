import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 20, children, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

function StrokeSvg(props: IconProps) {
  return <Svg fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props} />;
}

/* Solid icons — used on desktop shortcuts and stat cards. */

export function HomeIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <path d="M11.3 3.28a1 1 0 0 1 1.4 0l8.2 7.7a.9.9 0 0 1-.62 1.56H19V20a1 1 0 0 1-1 1h-3.5v-5.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1V21H6a1 1 0 0 1-1-1v-7.46H3.72a.9.9 0 0 1-.62-1.56z" />
    </Svg>
  );
}

export function FollowersIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <circle cx="9" cy="7.5" r="3.75" />
      <path d="M1.75 19.25C1.75 15.8 5 13.5 9 13.5s7.25 2.3 7.25 5.75V20a1 1 0 0 1-1 1H2.75a1 1 0 0 1-1-1z" />
      <circle cx="17.25" cy="8.5" r="2.9" />
      <path d="M17.9 13.3c2.6.3 4.35 2.05 4.35 4.45V20a1 1 0 0 1-1 1h-3.4v-1.75c0-2.3-.95-4.3-2.6-5.7.8-.2 1.7-.3 2.65-.25" />
    </Svg>
  );
}

export function FollowingIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <circle cx="9.5" cy="7.5" r="4" />
      <path d="M2 19.5c0-3.5 3.35-6 7.5-6s7.5 2.5 7.5 6v.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
      <path d="M18.3 7.3a1 1 0 0 1 1.4 0l2.5 2.5a1 1 0 0 1 0 1.4l-2.5 2.5a1 1 0 1 1-1.4-1.4l.8-.8H16a1 1 0 1 1 0-2h3.1l-.8-.8a1 1 0 0 1 0-1.4" />
    </Svg>
  );
}

export function MutualsIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <circle cx="12" cy="6.75" r="3.5" />
      <circle cx="5" cy="9.5" r="2.6" />
      <circle cx="19" cy="9.5" r="2.6" />
      <path d="M6 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5v.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
      <path d="M4.6 13.6c.5 0 1 .05 1.45.15A7.3 7.3 0 0 0 4.2 19v.5H1.8a.8.8 0 0 1-.8-.8v-.6c0-2.5 1.55-4.5 3.6-4.5M19.4 13.6c2.05 0 3.6 2 3.6 4.5v.6a.8.8 0 0 1-.8.8h-2.4V19a7.3 7.3 0 0 0-1.85-5.25c.45-.1.95-.15 1.45-.15" />
    </Svg>
  );
}

export function NotFollowingBackIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <circle cx="9.5" cy="7.5" r="4" />
      <path d="M2 19.5c0-3.5 3.35-6 7.5-6 1.2 0 2.35.2 3.35.6A6.5 6.5 0 0 0 12 17.5c0 1.3.4 2.5 1.05 3.5H3a1 1 0 0 1-1-1z" />
      <path d="M18 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9m-2 3.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" />
    </Svg>
  );
}

export function CompareIcon(props: IconProps) {
  return (
    <StrokeSvg strokeWidth={2.4} {...props}>
      <path d="M4 7.5h15.5M15.5 3.5l4 4-4 4" />
      <path d="M20 16.5H4.5M8.5 12.5l-4 4 4 4" />
    </StrokeSvg>
  );
}

export function InsightsIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <rect x="3.5" y="11" width="4.5" height="10" rx="1.4" />
      <rect x="9.75" y="3" width="4.5" height="18" rx="1.4" />
      <rect x="16" y="7.5" width="4.5" height="13.5" rx="1.4" />
    </Svg>
  );
}

export function AboutIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <path d="M2 5.2c0-.6.45-1.1 1.05-1.15C5.9 3.8 8.6 4.3 11 5.8V21c-2.4-1.45-5.1-1.95-7.95-1.7A1 1 0 0 1 2 18.3z" />
      <path d="M22 5.2c0-.6-.45-1.1-1.05-1.15-2.85-.25-5.55.25-7.95 1.75V21c2.4-1.45 5.1-1.95 7.95-1.7A1 1 0 0 0 22 18.3z" />
    </Svg>
  );
}

export function SupportIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <path d="M12 3a8.5 8.5 0 0 0-8.5 8.5V17a3 3 0 0 0 3 3H8a1 1 0 0 0 1-1v-5.5a1 1 0 0 0-1-1H5.55v-1a6.45 6.45 0 0 1 12.9 0v1H16a1 1 0 0 0-1 1V19a1 1 0 0 0 1 1h1.5a3 3 0 0 0 3-3v-5.5A8.5 8.5 0 0 0 12 3" />
    </Svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Svg fill="currentColor" {...props}>
      <path d="M12 20.5s-8.5-4.9-8.5-11A4.75 4.75 0 0 1 12 6.6a4.75 4.75 0 0 1 8.5 2.9c0 6.1-8.5 11-8.5 11" />
    </Svg>
  );
}

export function GitHubIcon({ size = 16, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}

/* Stroke icons — used for inline UI affordances. */

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeSvg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </StrokeSvg>
  );
}

export function ExternalLinkIcon(props: IconProps) {
  return (
    <StrokeSvg {...props}>
      <path d="M14 4h6v6M20 4l-9 9" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </StrokeSvg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <StrokeSvg {...props}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </StrokeSvg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <StrokeSvg {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </StrokeSvg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <StrokeSvg {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </StrokeSvg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <StrokeSvg {...props}>
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11" />
    </StrokeSvg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <StrokeSvg {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
    </StrokeSvg>
  );
}

export function SpinnerIcon(props: IconProps) {
  return (
    <Svg fill="none" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
      <path fill="currentColor" opacity="0.75" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12z" />
    </Svg>
  );
}
