const SubHeading = ({ text, textColor }) => {
  return (
    <>
      <h1 className="sub-heading" style={{ color: textColor }}>
        {text}
      </h1>
    </>
  );
};

export default SubHeading;
