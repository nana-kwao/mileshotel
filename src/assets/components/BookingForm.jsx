import { useRef, useState } from "react";
import SubHeading from "./SubHeading";

const BookingForm = () => {
  const roomFormRef = useRef(null);
  const [roomForms, setRoomForms] = useState([0]);

  const RoomForm = ({ index }) => {
    return (
      <li className="form-selection">
        <label htmlFor={`roomType-${index}`}>
          Room Type{" "}
          <select name={`roomType-${index}`} id={`roomType-${index}`} required>
            <option value="">--Select Room Type--</option>
            <option value="economy_fan">Economy With Fan</option>
            <option value="economy_ac">Economy With A/C</option>
            <option value="executive_queensize">
              Executive Queen-size Bed
            </option>
            <option value="executive_twinbed">Executive Twin Bed</option>
          </select>
        </label>
        <label htmlFor={`checkIn-${index}`}>
          Check In:{" "}
          <input
            type="date"
            name={`checkIn-${index}`}
            id={`checkIn-${index}`}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </label>
        <label htmlFor={`checkOut-${index}`}>
          Check Out:{" "}
          <input
            type="date"
            name={`checkOut-${index}`}
            id={`checkOut-${index}`}
            required
            min={new Date().toISOString().split("T")[0]}
          />
        </label>
        <label htmlFor={`numberOfRooms`}>
          Number of Rooms:{" "}
          <input
            type="number"
            name="numberOfRooms"
            id="numberOfRooms"
            required
          />
        </label>
      </li>
    );
  };

  const addNewRoomForm = () => {
    setRoomForms((prev) => [...prev, prev.length]);
  };

  return (
    <>
      <div className="booknow">
        <div>
          <SubHeading text={"MAKE A BOOKING"} textColor={"#fcfaf7"} />
        </div>
        <form id="bookingForm">
          <label htmlFor="customerName">
            Customer:{" "}
            <input type="text" name="customerName" id="customerName" required />
          </label>
          <label htmlFor="customerMobile">
            Telephone:{" "}
            <input
              type="tel"
              name="customerMobile"
              id="customerMobile"
              required
            />
          </label>
          <div className="roomFrom-area">
            <ul className="roomForm" ref={roomFormRef}>
              {roomForms.map((_, idx) => (
                <RoomForm key={idx} index={idx} />
              ))}
            </ul>
            <button type="button" onClick={addNewRoomForm}>
              Add New Room
            </button>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
