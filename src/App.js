import { useEffect } from "react";
import { Header } from "./components/Header";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import { useState } from "react";

function App() {
  const [allMovies, setAllMovies] = useState([]);

  // Get All Movies From API
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4f8436f318fabec13eaea1ecea017850"
    );
    setAllMovies(res.data.results);
  };

  useEffect(() => {
    getAllMovies();
    console.log("MOVIES FROM APP");
    console.log(allMovies);
  }, []);

  const Search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=4f8436f318fabec13eaea1ecea017850&query=${word}&languager=en`
      );
      setAllMovies(res.data.results);
    }
  };
  return (
    <>
      {/* This Section For Movies List Page*/}
      <section className="overflow-hidden min-h-screen pt-3 2xl:px-20 px-7">
        {/* Start  of the nav header section  */}
        <Header search={Search} />
        {/* End of the nav header section  */}

        {/* Start of movies components list section  */}
        <MoviesList Movies={allMovies} />
        {/* End of movies components list section  */}

        {/* The Pagination */}
        <div></div>
      </section>
    </>
  );
}

export default App;
