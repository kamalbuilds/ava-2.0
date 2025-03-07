"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { usePathname } from 'next/navigation';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <>
      {!isLandingPage && <Navbar />}
      <main>{children}</main>
      {!isLandingPage && <Footer />}
    </>
  );
}
