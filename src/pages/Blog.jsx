import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBanner from "../components/ServiceBanner";
import BlogSection from "./AboutUs/Blog/BlogSection";
import AirCargoBlog from "./AboutUs/Blog/AirCargoBlog";
import TruckBlog from "./AboutUs/Blog/TruckBlog";

function Blog() {
  return (
    <>
      <Navbar />

      <ServiceBanner />

      <BlogSection/>
      <AirCargoBlog/>
      <TruckBlog/>

      <Footer />
    </>
  );
}

export default Blog;