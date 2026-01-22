"use client";

export const dynamic = "force-dynamic";

import dynamicImport from "next/dynamic";

const Header = dynamicImport(() => import("@/components/layout/Header"), { ssr: false });
const Hero = dynamicImport(() => import("@/components/layout/Hero"), { ssr: false });
const Menu = dynamicImport(() => import("@/components/layout/Menu"), { ssr: false });
const About = dynamicImport(() => import("@/components/layout/About"), { ssr: false });
const Services = dynamicImport(() => import("@/components/layout/Services"), { ssr: false });
const Location = dynamicImport(() => import("@/components/layout/Location"), { ssr: false });
const Review = dynamicImport(() => import("@/components/layout/Review"), { ssr: false });
const Footer = dynamicImport(() => import("@/components/layout/Footer"), { ssr: false });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Menu />
      <About />
      <Services />
      <Location />
      <Review />
      <Footer />
    </>
  );
}
