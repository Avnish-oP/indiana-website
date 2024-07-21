import Categories from "@/components/Categories";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <Faq />
    </main>
  );
}
