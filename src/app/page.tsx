import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import FaqAccordion from "@/components/Faq";
import Founders from "@/components/founder";
import Hero from "@/components/Hero";
import  ServicesSection  from "@/components/OurServices";
import Services from "@/components/Services";
import StatsBar from "@/components/Stats";
import Head from "next/head";
import VideoComponent from "@/components/VideoComponent";
import Categories2 from "@/components/Categories2";



export default function Home() {
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
    <main className="min-h-screen">
      <Hero />
      {/* <Categories /> */}
      <Categories2 />
      <StatsBar />
      <Services />
      <Founders />
      <ServicesSection />
      <FaqAccordion />
      <VideoComponent /> 
      <ContactUs />
    </main>
    </>
  );
}
