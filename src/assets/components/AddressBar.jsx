import phone from "@icons/phone.svg";
import email from "@icons/email.svg";
import earth from "@icons/earth.svg";

const AddressItem = ({ icon, text, link, alt, disabled }) => {
  return (
    <>
      <div className="address-item">
        <img src={`${icon}`} alt={`${alt}`} width={"12rem"} />
        <a href={`${link}`} disabled={disabled}>
          {text}
        </a>
      </div>
    </>
  );
};

const AddressBar = () => {
  return (
    <>
      <div className="address-bar">
        <div className="address-email-tel">
          <AddressItem
            icon={phone}
            text={"+233559082614"}
            alt={"phone"}
            link={`tel:+233559082614`}
          />
          <AddressItem
            icon={email}
            text={"nanakwaofreiku@gmail.com"}
            alt={"email"}
            link={"mailto:nanakwaofreiku@gmail.com"}
          />
        </div>
        <div className="address-lan">
          <AddressItem
            icon={earth}
            text={"EN"}
            disabled={true}
            alt={"earth"}
            link={""}
          />
        </div>
      </div>
    </>
  );
};

export default AddressBar;
