import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import CompanyOverview from "./AboutUs/CompanyOverview/CompanyOverview";
import TeamSection from "./AboutUs/CompanyOverview/TeamSection";

function AboutUs() {
  return (
    <>
      <Navbar />

      <ServiceBanner />

      <CompanyOverview/>
      <TeamSection/>

      <Footer />
    </>
  );
}

export default AboutUs;