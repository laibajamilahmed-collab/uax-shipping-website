import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import NewsAndTestimonial from "../components/NewsAndTestimonial";
import HeroSection from "./Home/HeroSection";
import ServicesCard from "../components/ServicesCard";
import FreightBanner from "./Home/FreightBanner";
import WhyChooseUs from "./Home/WhyChooseUs";
import ServiceProcess from "./Home/ServiceProcess";
import QuoteSection from "./Home/QuoteSection";
import ShipmentForm from "./shiping/CreateShipment/ShipmentForm";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ServicesCard/>
      <FreightBanner/>
      <WhyChooseUs/>
      <ServiceProcess/>
      <QuoteSection/>
      <StatsSection />
      <NewsAndTestimonial/>
      <Footer />
    </>
  );
}

export default Home;