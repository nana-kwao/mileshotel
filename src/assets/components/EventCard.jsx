import calender from "@icons/calendar.png";
import clock from "@icons/clock.png";
import concert from "@img/concert.jpeg";
import conference from "@img/conference.jpeg";
import dinner from "@img/dinner.jpeg";
import SubHeading from "./SubHeading";

const Events = () => {
  const events = [
    {
      img: conference,
      alt: "conference",
      heading: "SHARING IS CARING",
      date: "December 28, 2025",
      time: "10:00 AM",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perferendis earum consequatur officia sint ipsa ducimus ea, exercitationem magnam ipsum!"
    },
    {
      img: dinner,
      alt: "dinner",
      heading: "ROMANTIC DINNER",
      date: "December 30, 2025",
      time: "16:00 PM",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perferendis earum consequatur officia sint ipsa ducimus ea, exercitationem magnam ipsum!"
    },
    {
      img: concert,
      alt: "concert",
      heading: "PARTY: NEW YEAR EVE",
      date: "January 1, 2026",
      time: "22:00 PM",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam perferendis earum consequatur officia sint ipsa ducimus ea, exercitationem magnam ipsum!"
    },
  ];

  const EventCard = ({ img, alt, heading, date, time, desc }) => {
    return (
      <>
        <div className="event-card">
          <div className="event-card-img">
            <img src={img} alt={alt} />
          </div>
          <div className="event-card-hdt">
            <h2>{heading}</h2>
            <div className="event-card-dt">
              <div className="event-card-d">
                <img src={calender} alt="calendar" width={"12rem"} />
                <p>{date}</p>
              </div>
              <div className="event-card-t">
                <img src={clock} alt="clock" width={"12rem"} />
                <p>{time}</p>
              </div>
            </div>
          </div>
          <div className="event-card-desc">
            <p>{desc}</p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="events">
        <div className="event-heading">
          <SubHeading text={"UPCOMMING EVENTS"} textColor={"#fcfaf7"} />
        </div>
        <div className="event-cards">
          {events.map((item, idx) => (
            <EventCard
              key={idx}
              img={item.img}
              alt={item.alt}
              heading={item.heading}
              date={item.date}
              time={item.time}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
