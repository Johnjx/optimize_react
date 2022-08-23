import { useState } from "react";
import "./styles.css";
import { useFetch } from "./useFetch";

export default function App() {
  const [number, setNumber] = useState(0);
  const { data } = useFetch(
    `https://emoji-api.com/categories/travel-places?access_key=${process.env.REACT_APP_EMOJI_API_KEY}`
  );

  console.log(data);
  function double(num) {
    console.log("running algorithm");
    for (let i = 0; i <= 10000; i++) {}
    return num * 2;
  }

  const doubledNumber = double(number);

  return (
    <>
      <form>
        <input
          type="number"
          placeholder="number"
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <div>{doubledNumber}</div>
        <div>
          {data.map((emoji) => {
            return <span key={emoji.slug}>{emoji.character}</span>;
          })}
        </div>
      </form>
    </>
  );
}
