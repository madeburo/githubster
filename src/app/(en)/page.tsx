import { HomeFaqJsonLd } from "@/components/home-faq-json-ld";
import { HomePage } from "@/components/home-page";

export default function Home() {
  return (
    <>
      <HomeFaqJsonLd locale="en" />
      <HomePage initialLocale="en" />
    </>
  );
}
