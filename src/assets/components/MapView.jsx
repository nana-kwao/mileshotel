import SubHeading from "./SubHeading";

const Mapview = () => {
  return (
    <>
      <div className="map-area">
        <SubHeading text={"LOCATE US"} textColor={"#033b44"} />
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7925.3361138314895!2d-1.5776235129423428!3d6.687975583549827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgh!4v1755533754052!5m2!1sen!2sgh`}
          referrerPolicy={"no-referrer-when-downgrade"}
          loading={"eager"}
          allowFullScreen={""}
          title={"Miles Location"}
        ></iframe>
      </div>
    </>
  );
};
export default Mapview;
