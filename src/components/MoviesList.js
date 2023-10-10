import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ Movies }) => {
  return (
    //    {/* Start of movies components list section  */}
    <section className=" mt-3 mx-auto">
      <div className="">
        {/* Start Movies Components */}
        <div className="grid grid-cols-1 xl-mobile:grid-cols-2  xs-desktop:grid-cols-3 md-desktop:grid-cols-4 xl-desktop:grid-cols-5 2xl-desktop:grid-cols-6   gap-3 w-full">
          {Movies.length >= 1 ? (
            Movies.map((item) => {
              return <MovieCard props={item} key={item.id} />;
            })
          ) : (
            <h3> There is no Movies Now </h3>
          )}
        </div>
        {/* Start Movies Components */}
      </div>
    </section>
    //  {/* End of movies components list section  */}
  );
};

export default MoviesList;
