import Header from "./Header";
import Quote from "./Quote";
import { BsFillChatQuoteFill } from "react-icons/bs";

const App = () => {
  return (
    <div className="mt-20 sm:mt-40 max-w-[1000px] mx-auto relative">
      <div className="mx-5 sm:mx-10 flex flex-col gap-10">
        <BsFillChatQuoteFill
          className="hidden sm:flex absolute top-0 md:right-40 sm:right-10  text-slate-300"
          size={150}
        />

        <Header />
        <Quote />
      </div>
    </div>
  );
};
export default App;
