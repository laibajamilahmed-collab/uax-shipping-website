import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import AirFreight from "../pages/AirFreight";
import CarFreight from "../pages/Carfreight";
import OceanFreight from "../pages/OceanFreight";
import Contact from "../pages/ContactUs";
import Shipment from "../pages/ShipmentList";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import Trackingshipment from "../pages/Tracking";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShipmentForm from "../pages/shiping/CreateShipment/ShipmentForm";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/Our Services"
          element={<Services/>}
        />
        <Route
          path="/air-freight"
          element={<AirFreight/>}
        />

        <Route
          path="/ocean-freight"
          element={<OceanFreight/>}
        />

        <Route
          path="/car-freight"
          element={<CarFreight/>}
        />

      <Route
          path="/contact"
          element={<Contact/>}
        />
        <Route
          path="/ShipmentList"
          element={<Shipment/>}
        />
        <Route
          path="/CreateShipment"
          element={<ShipmentForm/>}
        />

         <Route
          path="/About"
          element={<AboutUs/>}
        />
         <Route
          path="/Blog"
          element={<Blog/>}
        />

        <Route
          path="/tracking"
          element={<Trackingshipment/>}
        />

           <Route
          path="/login"
          element={<Login/>}
        />
         <Route
          path="/register"
          element={<Register/>}
        />
          
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;