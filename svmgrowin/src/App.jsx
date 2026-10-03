import "./style.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 
import SocialIcons from "./components/FloatingSocial"; 
import Home from "./pages/Home"; 
import Blogs from "./pages/Blogs"; 
import BanquetHall from "./templates/Banquet-hall"; 
import CulturalDance from "./templates/Cultural Dance"; 
import EventEntertainment from "./templates/Event Entertainment"; 
import GraphicDesign from "./templates/Graphic-design"; 
import PhotoFramingPrinting from "./templates/Photo-framing-printing"; 
import Photography from "./templates/Photography"; 
import TentHousEventServices from "./templates/tent-house-event-services"; 
import Vehicleservices from "./templates/Vehicle-services"; 
import Weddingshoot from "./templates/Wedding-shoot"; 
import WeddingVideoEdit from "./templates/Wedding-video-edit";  
function App() { 
  return ( 
    <BrowserRouter> 
      <Header /> 
 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/Blogs" element={<Blogs />} /> 

        <Route path="/templates/Banquet-hall" element={<BanquetHall />} /> 
        <Route path="/templates/Cultural Dance" element={<CulturalDance />} /> 
        <Route path="/templates/Event Entertainment" element={<EventEntertainment />} /> 
        <Route path="/templates/Graphic-design" element={<GraphicDesign />} /> 
        <Route path="/templates/Photo-framing-printing" element={<PhotoFramingPrinting />} /> 
        <Route path="/templates/Photography" element={<Photography />} /> 
        <Route path="/templates/Tent-hous-event-services" element={<TentHousEventServices />} /> 
        <Route path="/templates/Vehicle-services" element={<Vehicleservices />} /> 
        <Route path="/templates/Wedding-shoot" element={<Weddingshoot />} /> 
        <Route path="/templates/Wedding-video-edit" element={<WeddingVideoEdit />} /> 
      </Routes> 
 
      <Footer /> 
    </BrowserRouter> 
  ); 
} 
 
export default App;
