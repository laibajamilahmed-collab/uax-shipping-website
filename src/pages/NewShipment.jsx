import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import CreateShipping from "./shiping/CreateShipment/CreateShipping";
import ShipmentForm from "./shiping/CreateShipment/ShipmentForm";

function NewShipment() {
  return (
    <>
      <Navbar />

      <ServiceBanner
        title="SHIPMENT"
        breadcrumb="Shipment"
      />
    <ShipmentForm/>

      <Footer />
    </>
  );
}

export default NewShipment;