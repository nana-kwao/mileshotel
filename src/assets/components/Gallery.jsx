import SubHeading from "./SubHeading";
import fac1 from "@img/fac1.jpeg";
import fac2 from "@img/fac2.jpeg";
import fac3 from "@img/fac3.jpeg";
import fac4 from "@img/fac4.jpeg";

const Gallery = () => {
  const GalleryDetail = () => {
    return (
      <>
        <div className="gallery-details">
          <SubHeading
            text={"EXPERIENCE OUR INIMITABLE LEGEND OF HISPITALITY"}
            textColor={"#033b44"}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            doloremque qui a possimus error eligendi velit iure laborum
            consectetur culpa!
          </p>
        </div>
      </>
    );                                  
  };

  const GalleryGrid = () => {
    return (
      <>
        <img src={fac3} alt="gallery-img" className="gallery-grid-item item1"/>
        <img src={fac1} alt="gallery-img" className="gallery-grid-item item2"/>
        <img src={fac2} alt="gallery-img" className="gallery-grid-item item3"/>
        <img src={fac4} alt="gallery-img" className="gallery-grid-item item4"/>
      </>
    );
  };

  return (
    <>
      <div className="gallery" id="offers">
        <div>
          <GalleryDetail />
        </div>
        <div className="gallery-grid">
          <GalleryGrid />
        </div>
      </div>
    </>
  );
};

export default Gallery;
