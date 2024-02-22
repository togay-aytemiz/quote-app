const Quote = ({ quote }) => {
  const { author, text } = quote;

  const newAuthor = author.split(",")[0].trim();

  return (
    <div>
      <p>{text}</p>
      <hr className="my-5" />
      <p className="font-semibold">{newAuthor}</p>
    </div>
  );
};
export default Quote;
