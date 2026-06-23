import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";

import Quote from "../components/Quote";
import OceanFreightSection from "./Services/OceanFreight/OceanFreight";
import NewsAndTestimonial from "../components/NewsAndTestimonial";

function OceanFreight() {
  return (
    <>
      <Navbar />

      <ServiceBanner />

      <OceanFreightSection />
      <NewsAndTestimonial/>

      <Footer />
    </>
  );
}

export default OceanFreight;