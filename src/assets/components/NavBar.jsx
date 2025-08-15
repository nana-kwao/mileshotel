import BookingBtn from "./BookingButton";

const Logo = () => {
  return (
    <>
      <div className="logo-area">
        <h2 className="logo-name">miles</h2>
        <p className="logo-desc">sleep to your satisfaction</p>
      </div>
    </>
  );
};

const MenuItem = ({ link, text }) => {
  return (
    <>
      <li className="menu-list-items" style={{listStyleType: "none", fontSize: "0.8rem"}}>
        <a href={`${link}`}>{text}</a>
      </li>
    </>
  );
};

const MenuItems = () => {
  return (
    <>
      <ul className="menu-ul">
        <MenuItem text={"OFFERS"} link={"#offers"} />
        <MenuItem text={"ACCOMMODATION"} link={"#accommodation"} />
        <MenuItem text={"EXPERIENCES"} link={"#experiences"} />
        <MenuItem text={"EVENTS"} link={"#events"} />
        <MenuItem text={"ABOUT"} link={"#about"} />
      </ul>
    </>
  );
};

const BookNowBtn = () => {
  return (
    <>
      <BookingBtn
        classname={"book-now-btn"}
        link={"#booknow"}
        text={"BOOK NOW"}
      />
    </>
  );
};

const NarBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div>
          <Logo />
        </div>
        <div>
          <MenuItems />
        </div>
        <div>
          <BookNowBtn />
        </div>
      </div>
    </>
  );
};
export default NarBar;
