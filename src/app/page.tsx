import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import FaqAccordion from "@/components/Faq";
import Founders from "@/components/founder";
import Hero from "@/components/Hero";
import  ServicesSection  from "@/components/OurServices";
import Services from "@/components/Services";
import StatsBar from "@/components/Stats";



export default function Home() {
  return (
    
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <StatsBar />
      <Services />
      <Founders />
      <ServicesSection />
      <FaqAccordion />
      <ContactUs />
    </main>
    
  );
}
