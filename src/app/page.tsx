import Categories from "@/components/Categories";
import FaqAccordion from "@/components/Faq";
import Hero from "@/components/Hero";
import  ServicesSection  from "@/components/OurServices";
import StatsBar from "@/components/Stats";



export default function Home() {
  return (
    
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <StatsBar />
      <ServicesSection />
      <FaqAccordion />
    </main>
    
  );
}
