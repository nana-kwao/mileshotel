import { useRef, useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
import "./App.css";
import AddressBar from "./assets/components/AddressBar";
import BackgroundImg from "./assets/components/BackgroundImg";
import Gallery from "./assets/components/Gallery";
import Heading from "./assets/components/Heading";
import NarBar from "./assets/components/NavBar";
import RoomsCard from "./assets/components/RoomCards";

function AppContent() {
  const offersRef = useRef(null);
  const accommodationRef = useRef(null);
  const experiencesRef = useRef(null);
  const eventsRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  const location = useLocation();

  // Scroll to section on route change
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    const refs = {
      "": homeRef,
      offers: offersRef,
      accommodation: accommodationRef,
      experiences: experiencesRef,
      events: eventsRef,
      about: aboutRef,
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
          experiencesRef,
          eventsRef,
          aboutRef,
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
      <div ref={experiencesRef} style={{ minHeight: "40vh", padding: "2em 0" }}>
        <h2 className="sub-heading">Experiences Page</h2>
      </div>
      <div ref={eventsRef} style={{ minHeight: "40vh", padding: "2em 0" }}>
        <h2 className="sub-heading">Events Page</h2>
      </div>
      <div ref={aboutRef} style={{ minHeight: "40vh", padding: "2em 0" }}>
        <h2 className="sub-heading">About Page</h2>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
