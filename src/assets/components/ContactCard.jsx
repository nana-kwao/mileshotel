import phone from "@icons/phone.svg";
import location from "@icons/location.svg";

const ContactCard = () => {
  return (
    <>
      <div className="contact-card">
        <h1>COME AND FEEL AT HOME</h1>
        <div>
          <img src={phone} alt="phone" />
          <a href="tel:+233559082614">0559082614</a>
        </div>
        <div>
          <img src={location} alt="phone" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            porro?
          </p>
        </div>
      </div>
    </>
  );
};
export default ContactCard;
