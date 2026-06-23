import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ShipmentTracking from "./Tracking/tracking/ShipmentTracking";
import ServicesCard from "../components/ServicesCard";
import ServiceBanner from "../components/ServiceBanner";


function Trackingshipment() {
  return (
    <>
      <Navbar />
      <ServiceBanner/>
           <ShipmentTracking/>
           <ServicesCard/>
      <Footer />
    </>
  );
}

export default Trackingshipment;