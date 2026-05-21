import type { GitHubUser } from "@/lib/github";

interface UserCardProps {
  user: GitHubUser;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <a
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border p-3 transition-all hover:scale-[1.01] active:scale-[0.99]"
      style={{
        borderColor: "var(--border)",
        background: "var(--bg-card)",
        boxShadow: "var(--shadow)",
      }}
    >
      <img
        src={user.avatar_url}
        alt={user.login}
        width={40}
        height={40}
        className="rounded-full ring-2 ring-transparent transition-all group-hover:ring-[var(--gradient-start)]"
      />
      <div className="min-w-0 flex-1">
        <p
          className="truncate text-sm font-medium"
          style={{ color: "var(--text)" }}
        >
          {user.login}
        </p>
        <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
          github.com/{user.login}
        </p>
      </div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{ color: "var(--text-muted)" }}
      >
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    </a>
  );
}
