import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";

import OrderTrackingSection from "./shiping/ShipmentList/OrderTrackingSection";

function Shipment() {
  return (
    <>
      <Navbar />

      <ServiceBanner
        title="SHIPMENT"
        breadcrumb="Shipment"
      />

      <OrderTrackingSection />

      <Footer />
    </>
  );
}

export default Shipment;