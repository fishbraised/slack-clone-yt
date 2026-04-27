import React, { useState } from "react";

const DynamicApp = () => {
  const [movies, setMovies] = useState([]);

  const showMovies = async () => {
    const module = await import("./Data");
    setMovies(module.moviesData);

    // import("./Data").then((module) => {
    //   setMovies(module.moviesData);
    // });
  };

  return (
    <div>
      <p>{movies.length === 0 ? "" : JSON.stringify(movies)}</p>
      <button onClick={showMovies}>Show</button>
    </div>
  );
};

export default DynamicApp;
