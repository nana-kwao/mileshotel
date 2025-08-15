import "./App.css";
import AddressBar from "./assets/components/AddressBar";
import BackgroundImg from "./assets/components/BackgroundImg";
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
    <RoomsCard/>
  </div>
  </>;
}

export default App;
