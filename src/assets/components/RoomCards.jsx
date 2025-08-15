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
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <SubHeading text={"ROOMS AVAILABLE"} textColor={"#033b44"} />
      <div className="room-cards" id="accommodation">
        <RoomCard
          img={room1}
          heading={"ECONOMY ROOM"}
          desc={["TV", "fan", "Washroom", "Double-size bed"]}
          price={200}
        />
        <RoomCard
          img={room2}
          heading={"ECONOMY ROOM"}
          desc={["TV", "A/C", "Washroom", "Double-size bed"]}
          price={250}
        />
        <RoomCard
          img={room3}
          heading={"EXECUTIVE ROOM"}
          desc={["TV", "A/C", "Washroom", "Queeb-size bed"]}
          price={350}
        />
        <RoomCard
          img={room4}
          heading={"EXECUTIVE ROOM"}
          desc={["TV", "A/C", "Washroom", "Twin bed"]}
          price={400}
        />
      </div>
    </>
  );
};

export default RoomsCard;
