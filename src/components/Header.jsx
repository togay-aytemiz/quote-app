import Button from "./Button";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="font-bold sm:text-4xl text-3xl">Be Inspired</h1>
        <p className="text-md sm:text-lg font-light text-slate-500">
          Random Quotes at Your Fingertips
        </p>
      </div>
      <Button />
    </div>
  );
};
export default Header;
