import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import RegistrationSection from "./Register/RegistrationSection";

function Register() {
  return (
    <>
      <Navbar />
      <ServiceBanner/>
      <RegistrationSection/>

      <Footer />
    </>
  );
}

export default Register;