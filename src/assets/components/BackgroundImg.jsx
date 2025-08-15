import bg1 from "@img/bg1.jpeg";
import bg2 from "@img/bg2.jpeg";
import bg3 from "@img/bg3.jpeg";
import bg4 from "@img/bg4.jpeg";
import bg5 from "@img/bg5.jpeg";
import bg6 from "@img/bg6.jpeg";
import { useState, useEffect } from "react";

const BackgroundImg = () => {
  const [link, setLink] = useState(bg1);

  useEffect(() => {
    const imageLinks = [bg1, bg2, bg3, bg4, bg5, bg6];
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * imageLinks.length);
      setLink(imageLinks[random]);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="background-img">
        <img src={link} alt="background" />
      </div>
    </>
  );
};

export default BackgroundImg;
