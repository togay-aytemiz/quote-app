import Button from "./Button";

const Header = ({ onRequestNewQuote }) => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold sm:text-4xl text-3xl">Be Inspired</h1>
        <p className="text-md sm:text-lg font-light text-slate-500">
          Random Quotes at Your Fingertips
        </p>
      </div>
      <Button onRequestNewQuote={onRequestNewQuote} />
    </div>
  );
};
export default Header;
