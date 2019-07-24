import { useContext, useState, useEffect } from "react";
import { ScrapeContext } from "./ScrapeContext";
// import { getNewPost } from "../apis";

import Pagination from "./Paginations.js";

export default function Data() {
  const scrapes = useContext(ScrapeContext);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  console.log("hello data data.js", scrapes.scrapes);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  console.log(indexOfFirstPost, "last", indexOfLastPost);

  //  Get current post
  const currentPosts =
    scrapes.scrapes.length > 0
      ? scrapes.scrapes.slice(
          indexOfFirstPost,
          indexOfLastPost
        )
      : "pas de donner";
  console.log(currentPosts);

  //  Get current page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Your Data :</h2>

      {scrapes.scrapes.length > 0 ? (
        <div>
          {currentPosts.map((item, i) => {
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

      <Pagination
        postsPerPage={postPerPage}
        totalPosts={scrapes.scrapes.length}
        paginate={paginate}
      />
    </div>
  );
}
