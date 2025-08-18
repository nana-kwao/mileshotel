import ContactCard from "./ContactCard";
import Mapview from "./MapView";

const Contact = () => {

  return (
    <>
      <div className="contact-area">
        <Mapview className={"contact-item1"} />
        <ContactCard className={"contact-item1"} />
      </div>
    </>
  );
};

export default Contact;
