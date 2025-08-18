import BookingBtn from "./BookingButton";
import { useNavigate, useLocation } from "react-router-dom";
import arrowup from "@icons/arrowup.svg";
import Logo from "./Logo";

const MenuItems = ({ refs }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (path, ref) => (e) => {
    e.preventDefault();
    if (location.pathname !== path) {
      navigate(path);
    } else if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ul className="menu-ul">
        <li className="menu-list-items">
          <a href="/" onClick={handleNav("/", refs.homeRef)}>
            HOME
          </a>
        </li>
        <li className="menu-list-items">
          <a href="/offers" onClick={handleNav("/offers", refs.offersRef)}>
            OFFERS
          </a>
        </li>
        <li className="menu-list-items">
          <a
            href="/accommodation"
            onClick={handleNav("/accommodation", refs.accommodationRef)}
          >
            ACCOMMODATION
          </a>
        </li>
        <li className="menu-list-items">
          <a
            href="/facilities"
            onClick={handleNav("/facilities", refs.facilitiesRef)}
          >
            FACILITIES
          </a>
        </li>
        <li className="menu-list-items">
          <a href="/events" onClick={handleNav("/events", refs.eventsRef)}>
            EVENTS
          </a>
        </li>
        <li className="menu-list-items">
          <a href="/contact" onClick={handleNav("/contact", refs.contactRef)}>
            CONTACT US
          </a>
        </li>
        <li className="menu-list-items">
          <a href="/footer" onClick={handleNav("/footer", refs.footerRef)}>
            <BookingBtn classname={"book-now-btn"} text={"BOOK NOW"} />
          </a>
        </li>
      </ul>
      <a href="/" onClick={handleNav("/", refs.homeRef)} className="arrowup">
        <img src={arrowup} alt="arrow" />
      </a>
    </>
  );
};

const NarBar = ({ refs }) => (
  <div className="nav-bar">
    <Logo />
    <MenuItems refs={refs} />
  </div>
);

export default NarBar;
