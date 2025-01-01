import AboutSection from "./components/sections/AboutSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import HeroSection from "./components/sections/HeroSection";
import ProductsSection from "./components/sections/ProductsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ProductsSection />
    </div>
  );
};

export default Home;
