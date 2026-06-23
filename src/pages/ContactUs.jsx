
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceBanner from "../components/ServiceBanner";
import ContactSection from "./ContactUs/ContactSection";

import MapSection from "./ContactUs/MapSection";

function Contact() {
  return (
    <>
    <Navbar/>
      <ServiceBanner/>
      <ContactSection />
      <MapSection />
      <Footer/>
    </>
  );
}

export default Contact;