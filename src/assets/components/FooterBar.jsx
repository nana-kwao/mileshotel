import BookingForm from "./BookingForm";
import Logo from "./Logo";
import facebook from "@icons/facebook.svg";
import twitter from "@icons/twitter.svg";
import whatsapp from "@icons/whatsapp.svg";
import LicenseBar from "./LicenseBar";

const Footer = () => {
  const socialMedia = [
    { img: facebook, alt: "facebook", link: "https://facebook.com/f.nanakwao" },
    { img: whatsapp, alt: "whatsapp", link: "https://wa.me/+233559082614" },
    { img: twitter, alt: "twitter", link: "https://x.com/f_nanakwao" },
  ];

  const SocialMEdia = ({ img, alt, link }) => {
    return (
      <>
        <div className="social-media">
          <a href={link}>
            <img src={img} alt={alt} />
          </a>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="footer">
        <BookingForm />
      </div>
      <div className="footer-socials">
        <Logo />
        <div className="socials-links">
          {socialMedia.map((item, idx) => (
            <SocialMEdia
              key={idx}
              img={item.img}
              alt={item.alt}
              link={item.link}
            />
          ))}
        </div>
      </div>{" "}
      <LicenseBar />
    </>
  );
};

export default Footer;
