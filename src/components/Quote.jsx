const Quote = ({ quote }) => {
  const { author, text } = quote;

  let updatedAuthor = author.split(",").map((part) => part.trim());
  // console.log(updatedAuthor[0]);
  // updatedAuthor = updatedAuthor.filter((item) => item !== "type.fit");
  // updatedAuthor = updatedAuthor.join(", ");

  return (
    <div>
      <p>{text}</p>
      <hr className="my-5" />
      <p className="font-semibold">
        {updatedAuthor[0] !== "type.fit" && updatedAuthor[0]}
      </p>
    </div>
  );
};
export default Quote;
