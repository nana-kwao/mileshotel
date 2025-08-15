const BookingBtn = ({ link, classname, text }) => {
  return (
    <>
      <a href={`${link}`}  className={classname}>{text}</a>
    </>
  );
};
export default BookingBtn;
