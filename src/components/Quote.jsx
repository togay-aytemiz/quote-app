const Quote = ({ quote }) => {
  const { author, text } = quote;

  return (
    <div>
      <p>{text}</p>
      <hr className="my-5" />
      <p className="font-semibold">{author}</p>
    </div>
  );
};
export default Quote;
