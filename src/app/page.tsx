import {
  HeroSection,
  Featured,
  ExploreSection,
  NewsletterSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection
        title1="Master Data Structures"
        title2=" & Algorithms with Ease!"
        subtitle="Explore in-depth tutorials, practical examples, and interview tips
            to sharpen your problem-solving skills."
        bgImg="/blog-hero-bg.webp"
        btnText="Explore now"
        btnLink="/categories"
      />
      <Featured />
      <ExploreSection />
      <NewsletterSection />
    </>
  );
}
