import { RootDocument } from "@/app/root-document";
import { baseMetadata } from "@/lib/site";

export const metadata = baseMetadata;

/** Root layout for the unprefixed English routes; other languages use `app/[locale]/layout.tsx`. */
export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootDocument lang="en" dir="ltr">
      {children}
    </RootDocument>
  );
}
