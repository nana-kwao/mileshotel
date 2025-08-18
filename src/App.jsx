import { useRef, useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import "./App.css";
import AddressBar from "./assets/components/AddressBar";
import BackgroundImg from "./assets/components/BackgroundImg";
import Gallery from "./assets/components/Gallery";
import Heading from "./assets/components/Heading";
import NarBar from "./assets/components/NavBar";
import RoomsCard from "./assets/components/RoomCards";
import Facilities from "./assets/components/FacilityGrid";
import Events from "./assets/components/EventCard";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/FooterBar";

function AppContent() {
  const offersRef = useRef(null);
  const accommodationRef = useRef(null);
  const facilitiesRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const footerRef = useRef(null)

  const location = useLocation();

  // Scroll to section on route change
  useEffect(() => {
    // Get the first path segment after "/"
    const path = location.pathname.split("/")[1] || "";
    const refs = {
      "": homeRef,
      offers: offersRef,
      accommodation: accommodationRef,
      facilities: facilitiesRef,
      events: eventsRef,
      contact: contactRef,
      footer: footerRef,
    };
    const ref = refs[path];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <AddressBar />
      <NarBar
        refs={{
          homeRef,
          offersRef,
          accommodationRef,
          facilitiesRef,
          eventsRef,
          contactRef,
          footerRef
        }}
      />
      <div ref={homeRef}>
        <Heading />
        <BackgroundImg />
      </div>
      <div ref={offersRef}>
        <Gallery />
      </div>
      <div ref={accommodationRef}>
        <RoomsCard />
      </div>
      <div ref={facilitiesRef}>
        <Facilities />
      </div>
      <div ref={eventsRef}>
        <Events />
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
      <div ref={footerRef}>
        <Footer/>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/mileshotel">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
