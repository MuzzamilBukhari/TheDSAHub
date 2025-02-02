import { Navbar, MobNavbar, Footer } from "@/components/";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <MobNavbar />
      {children}
      <Footer />
    </main>
  );
}
