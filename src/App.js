import { Header } from "./components/Header";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      {/* This Section For Movies List Page*/}
      <section className="overflow-hidden min-h-screen pt-3 2xl:px-20 px-7">
        {/* Start  of the nav header section  */}
        <Header />
        {/* End of the nav header section  */}

        {/* Start of movies components list section  */}
        <section className=" mt-3 mx-auto">
          <div className="">
            {/* Start Movies Components */}
            <div className="grid grid-cols-1 xl-mobile:grid-cols-2  xs-desktop:grid-cols-3 md-desktop:grid-cols-4 xl-desktop:grid-cols-5 2xl-desktop:grid-cols-6   gap-3 w-full">
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
            {/* Start Movies Components */}
          </div>
        </section>
        {/* End of movies components list section  */}

        {/* The Pagination */}
        <div></div>
      </section>
    </>
  );
}

export default App;
