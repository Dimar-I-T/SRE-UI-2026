import Hero from "@/components/ui/home/Hero";
import About from "@/components/ui/home/About";
import SummitInfo from "@/components/ui/home/SummitInfo";
import Cta from "@/components/ui/home/Cta";
import PreviousEvent from "@/components/ui/home/PreviousEvent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full bg-white overflow-x-hidden">
      <Hero />
      <About />
      <SummitInfo />
      <PreviousEvent />
      <Cta />
    </main>
  );
}