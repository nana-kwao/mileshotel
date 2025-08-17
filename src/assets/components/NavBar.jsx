import BookingBtn from "./BookingButton";
import { useNavigate, useLocation } from "react-router-dom";

const Logo = () => (
  <div className="logo-area">
    <h2 className="logo-name">miles</h2>
    <p className="logo-desc">sleep to your satisfaction</p>
  </div>
);

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
    <ul className="menu-ul">
      <li className="menu-list-items">
        <a href="/" onClick={handleNav("/", refs.homeRef)}>
          HOME
        </a>
      </li>
      <li className="menu-list-items">
        <a
          href="/offers"
          onClick={handleNav("/mileshotel/offers", refs.offersRef)}
        >
          OFFERS
        </a>
      </li>
      <li className="menu-list-items">
        <a
          href="/accommodation"
          onClick={handleNav(
            "/mileshotel/accommodation",
            refs.accommodationRef
          )}
        >
          ACCOMMODATION
        </a>
      </li>
      <li className="menu-list-items">
        <a
          href="/facilities"
          onClick={handleNav("/mileshotel/facilities", refs.facilitiesRef)}
        >
          FACILITIES
        </a>
      </li>
      <li className="menu-list-items">
        <a
          href="/events"
          onClick={handleNav("/mileshotel/events", refs.eventsRef)}
        >
          EVENTS
        </a>
      </li>
      <li className="menu-list-items">
        <a
          href="/about"
          onClick={handleNav("/mileshotel/about", refs.aboutRef)}
        >
          ABOUT
        </a>
      </li>
    </ul>
  );
};

const BookNowBtn = () => (
  <BookingBtn classname={"book-now-btn"} link="#booknow" text={"BOOK NOW"} />
);

const NarBar = ({ refs }) => (
  <div className="nav-bar">
    <Logo />
    <MenuItems refs={refs} />
    <BookNowBtn />
  </div>
);

export default NarBar;
