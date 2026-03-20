import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto w-full max-w-6xl px-4 py-6">{children}</div>
      <SiteFooter />
    </div>
  );
}
