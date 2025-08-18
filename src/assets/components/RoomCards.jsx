import BookingBtn from "./BookingButton";
import room1 from "@img/room1.jpeg";
import room2 from "@img/room2.jpeg";
import room3 from "@img/room3.jpeg";
import room4 from "@img/room4.jpeg";
import SubHeading from "./SubHeading";

const RoomsCard = () => {
  const RoomCard = ({ img, heading, desc, price }) => {
    return (
      <>
        <div className="room-card">
          <div className="roomcard-img">
            <img src={img} alt="room-img" />
          </div>
          <div className="roomcard-details">
            <h2>{heading}</h2>
            <ul>
              {desc.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="roomcard-price">
            <div className="roomcard-price-area">
              <p>Price</p>
              <p>${price}/NIGHT</p>
            </div>
            <BookingBtn
              classname={"available-btn"}
              text={"CHECK AVAILABILITY"}
              link={"tel:+233559082614"}
            />
          </div>
        </div>
      </>
    );
  };
  const rooms = [
    {
      img: room1,
      heading: "ECONOMY ROOM",
      desc: ["TV", "fan", "Washroom", "Double-size bed"],
      price: 200,
    },
    {
      img: room2,
      heading: "ECONOMY ROOM",
      desc: ["TV", "A/C", "Washroom", "Double-size bed"],
      price: 200,
    },
    {
      img: room3,
      heading: "EXECUTIVE ROOM",
      desc: ["TV", "A/C", "Fridge", "Washroom", "Queen-size bed"],
      price: 200,
    },
    {
      img: room4,
      heading: "EXECUTIVE ROOM",
      desc: ["TV", "A/C", "Fridge", "Washroom", "Twin bed"],
      price: 200,
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#033b44" }}>
        <SubHeading text={"ROOMS AVAILABLE"} textColor={"#fcfaf7"} />
        <div className="room-cards" id="accommodation">
          {rooms.map((item, idx) => (
            <RoomCard
              key={idx}
              img={item.img}
              heading={item.heading}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomsCard;
