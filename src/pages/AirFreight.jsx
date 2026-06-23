import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import AirFreightSection from "./Services/AirFreight/AirFreightSection";
import NewsAndTestimonial from "../components/NewsAndTestimonial";

function AirFreight() {
  return (
    <>
      <Navbar />

      <ServiceBanner />

      <AirFreightSection/>

    <NewsAndTestimonial/>

      <Footer />
    </>
  );
}

export default AirFreight;