import { useContext } from "react";
import { ScrapeContext } from "./ScrapeContext";
import { getNewPost } from "../apis";

export default function Data() {
  const scrapes = useContext(ScrapeContext);
  console.log("hello data data.js", scrapes.scrapes);

  // const handleSubmit = () => {
  //   console.log("click is press");
  //   getNewPost().then(response => {
  //     console.log("Go to scrape :", response.data);
  //     setScrappe(...response);
  //   });
  // };
  return (
    <div>
      <h2>Your Data</h2>
      {/* <p>
        {" "}
        What's new ?
        <button onClick={handleSubmit()}>
          Get new post
        </button>{" "}
      </p> */}

      {scrapes.scrapes.length > 0 ? (
        <div>
          {scrapes.scrapes.map((item, i) => {
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
