import { useEffect, useState } from "react";
import Header from "./Header";
import Quote from "./Quote";
import { BsFillChatQuoteFill } from "react-icons/bs";

const App = () => {
  const BASE_URL = "https://type.fit/api/quotes";

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const getQuotes = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setQuotes(data);
    };
    getQuotes();
  }, []);

  // console.log(quotes);

  const handleRandomlySelect = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    console.log("Randomly selected quote:", quote);
  };

  return (
    <div className="mt-20 sm:mt-40 max-w-[1000px] mx-auto sm:relative">
      <div className="mx-5 sm:mx-10 flex flex-col gap-10">
        <BsFillChatQuoteFill
          className="sm:flex absolute sm:top-0 md:right-40 sm:right-10 right-5 bottom-5 text-slate-300"
          size={150}
        />

        <Header onRequestNewQuote={handleRandomlySelect} />
        <Quote quote={quote} />
      </div>
    </div>
  );
};
export default App;
