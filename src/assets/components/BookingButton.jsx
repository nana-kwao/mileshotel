const BookingBtn = ({ link, classname, text }) => {
  return (
    <>
      <button href={`${link}`}  className={classname}>{text}</button>
    </>
  );
};
export default BookingBtn;
