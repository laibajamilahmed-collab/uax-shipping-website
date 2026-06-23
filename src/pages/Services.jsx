import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import { Link } from "react-router-dom";
import ServicesCard from "../components/ServicesCard";

function Services() {
  return (
    <>
      <Navbar />

      <ServiceBanner />

      <ServicesCard/>


      <Footer />
    </>
  );
}

export default Services;