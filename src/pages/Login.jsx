import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import LoginSection from "./Login/LoginSection";

function Login() {
  return (
    <>
      <Navbar />
      <ServiceBanner/>
      <LoginSection/>

      <Footer />
    </>
  );
}

export default Login;