const Quote = ({ quote }) => {
  const { author, text } = quote;

  // let updatedAuthor = author.split(",").map((part) => part.trim());
  // updatedAuthor = updatedAuthor.filter((item) => item !== "type.fit");
  // updatedAuthor = updatedAuthor.join(", ");

  return (
    <div>
      <p>{text}</p>
      <hr className="my-5" />
      <p className="font-semibold">{author}</p>
    </div>
  );
};
export default Quote;
