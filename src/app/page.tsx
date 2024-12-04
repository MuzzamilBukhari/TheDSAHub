import {
  HeroSection,
  Featured,
  ExploreSection,
  NewsletterSection,
} from "@/components";

export default function Home() {
  const urlString: string = "/blogs";
  const url: URL = (urlString as unknown) as URL;

  return (
    <>
      <HeroSection
        title1="Master Data Structures"
        title2=" & Algorithms with Ease!"
        subtitle="Explore in-depth tutorials, practical examples, and interview tips
            to sharpen your problem-solving skills."
        bgImg="/blog-hero-bg.webp"
        btnText="Explore now"
        btnLink={url}
      />
      <Featured />
      <ExploreSection />
      <NewsletterSection />
    </>
  );
}
