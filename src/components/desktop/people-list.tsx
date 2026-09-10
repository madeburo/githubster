"use client";

import Image from "next/image";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/icons";
import { cx, focusRing } from "@/lib/ui";

export type Person = {
  login: string;
  subtitle?: string;
  avatarUrl?: string;
  /** Monogram colour used when there is no avatar (example data). */
  accent?: string;
};

interface PeopleListProps {
  title: string;
  people: Person[];
  openLabel: (login: string) => string;
  viewAllLabel: string;
  onViewAll?: () => void;
  emptyText?: string;
}

export function PeopleList({ title, people, openLabel, viewAllLabel, onViewAll, emptyText }: PeopleListProps) {
  return (
    <section className="min-w-0 rounded-2xl border border-line bg-card p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="truncate text-sm font-semibold text-fg">{title}</h3>
        {onViewAll && (
          <button
            type="button"
            onClick={onViewAll}
            className={cx("inline-flex shrink-0 cursor-pointer items-center gap-1 rounded text-[13px] font-medium text-brand hover:underline", focusRing)}
          >
            {viewAllLabel}
            <ArrowRightIcon size={14} className="rtl:rotate-180" />
          </button>
        )}
      </div>

      {people.length === 0 ? (
        <p className="py-6 text-center text-xs text-fg-muted">{emptyText}</p>
      ) : (
        <ul className="mt-2 divide-y divide-line">
          {people.map((person) => (
            <li key={person.login}>
              <a
                href={`https://github.com/${encodeURIComponent(person.login)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={openLabel(person.login)}
                className={cx("group -mx-2 flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-card-hover", focusRing)}
              >
                <Avatar person={person} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-fg">{person.login}</span>
                  <span className="block truncate text-xs text-fg-subtle">{person.subtitle ?? `github.com/${person.login}`}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-line px-2.5 py-1 text-xs font-medium text-fg-muted transition-colors group-hover:border-brand/40 group-hover:text-fg">
                  GitHub
                  <ExternalLinkIcon size={12} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Avatar({ person }: { person: Person }) {
  if (person.avatarUrl) {
    return (
      <Image src={person.avatarUrl} alt="" width={36} height={36} className="size-9 shrink-0 rounded-full" unoptimized />
    );
  }

  return (
    <span
      aria-hidden="true"
      className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
      style={{ background: person.accent ?? "var(--brand)" }}
    >
      {person.login.charAt(0).toUpperCase()}
    </span>
  );
}
