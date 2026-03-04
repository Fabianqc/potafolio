import { Hero } from "@/components/sections/Hero";
import { HybridProfile } from "@/components/sections/HybridProfile";
import { TheFlexInfra } from "@/components/sections/TheFlexInfra";
import { TechStack } from "@/components/sections/TechStack";
import { SeoShowcase } from "@/components/sections/SeoShowcase";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <HybridProfile />
      <TheFlexInfra />
      <TechStack />
      <SeoShowcase />
      <Experience />
    </main>
  );
}
