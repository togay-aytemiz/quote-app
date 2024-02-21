const Quote = ({ quote }) => {
  const { author, text } = quote;

  let updatedAuthor = quote?.author;
  let newAuthor = updatedAuthor.split(",");
  console.log(newAuthor[0]);
  // console.log(updatedAuthor[0]);
  // updatedAuthor = updatedAuthor.filter((item) => item !== "type.fit");
  // updatedAuthor = updatedAuthor.join(", ");

  return (
    <div>
      <p>{text}</p>
      <hr className="my-5" />
      <p className="font-semibold">{newAuthor[0]}</p>
    </div>
  );
};
export default Quote;
