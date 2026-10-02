import { notFound } from "next/navigation";

/** Catches every unmatched nested URL so it renders the styled 404 inside the root layout. */
export default function UnmatchedPage() {
  notFound();
}
