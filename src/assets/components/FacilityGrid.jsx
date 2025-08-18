import SubHeading from "./SubHeading";

const Facilities = () => {
  return (
    <>
      <div className="facilities">
        <div className="facility-item fac-item1">
          <SubHeading text={"HOTEL FACILITIES"} textColor={"#033b44"} />
        </div>
        <div className="facility-item fac-item2">
          <div className="facility-item-text">GYM CENTER</div>
        </div>
        <div className="facility-item fac-item3">
          <div className="facility-item-text">CAR PARK</div>
        </div>
        <div className="facility-item fac-item4">
          <div className="facility-item-text">POOL</div>
        </div>
        <div className="facility-item fac-item5">
          <div className="facility-item-text">RESTAURANT</div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
