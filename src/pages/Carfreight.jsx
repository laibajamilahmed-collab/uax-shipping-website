import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 import ServiceBanner from "../components/ServiceBanner";
import CarFreightSection from "./Services/CarFreight/CarFreight";
import Quote from "../components/Quote";
import NewsAndTestimonial from "../components/NewsAndTestimonial";

function CarFreight() {
  return (
    <>
      <Navbar />

      <ServiceBanner />

      <CarFreightSection />

      <NewsAndTestimonial/>

      <Footer />
    </>
  );
}

export default CarFreight;