import { useEffect, useState } from "react";
import { ScrapeProvider } from "./ScrapeContext";
import { getData } from "../apis";

function useScrapes() {
  const [scrapes, setScrapes] = useState({});

  useEffect(function() {
    (async () => {
      getData()
        .then(response =>
          setScrapes(response.data.scrappedData)
        )
        .catch(err => console.log(err));
    })();
  }, []);
  return scrapes;
}
export default function Page({ children }) {
  const scrapes = useScrapes();

  return (
    <ScrapeProvider
      value={{
        scrapes
      }}
    >
      <div className='page'>{children}</div>
    </ScrapeProvider>
  );
}
