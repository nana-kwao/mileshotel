import "./App.css";
import AddressBar from "./assets/components/AddressBar";
import BackgroundImg from "./assets/components/BackgroundImg";
import Gallery from "./assets/components/Gallery";
import Heading from "./assets/components/Heading";
import NarBar from "./assets/components/NavBar";
import RoomsCard from "./assets/components/RoomCards";

function App() {
  return <>
  <div>
    <AddressBar/>
    <NarBar/>
    <Heading/>
    <BackgroundImg/>
    <Gallery/>
    <RoomsCard/>
  </div>
  </>;
}

export default App;
