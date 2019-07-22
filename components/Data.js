import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";

export default function Data() {
  const scrapes = useContext(ScrapeContext);
  console.log("hello data data.js", scrapes);
  return (
    <div>
      <h2>Your Data</h2>
      {scrapes.length > 0 ? (
        <div>
          {scrapes.map((item, i) => {
            return (
              <div key={i}>
                <h2>{item.name}</h2>
                <img src={item.image} />

                <p> {item.title} </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Pas de donnée</p>
        </div>
      )}
    </div>
  );
}
