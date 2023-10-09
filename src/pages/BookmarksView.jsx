// import NowShowing from "../templates/NowShowing";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
// import Popular from "../templates/Popular";
import Navigation from "../components/Navigation";
import axios from "axios";

function BookmarksBox() {
  return(
    <>
      {/* {response.data} */}
      <span> (bookmarks here..?) </span>
    </>
  );
}

const Bookmarks = () => {
  return (
    <>
      <header className="gridContainer header dark:bg-black">
        <Switch justify="end" align="center" />
        <Heading title="MyMovies" size="16" as="h1" className="dark:text-white" />
      </header>
      <main className="dark:bg-black">
        <section className="HorizontalMovieListContainer">
          <div className="flexContainer justify-space-between">
            <Heading title="Now Showing" size="16" as="h2" className="dark:text-white" />
            <Button title="See More" />
          </div>
          <div className="flexContainer movieCardContainerLayout">
            {/* <NowShowing /> */}
          </div>
        </section>
        <section className="VerticalMovieListContainer">
          <div className="flexContainer justify-space-between VerticalMovieListTitleLayout dark:bg-black">
            <Heading title="Popular" size="16" as="h2" className="dark:text-white" />
            <Button title="See More" />
          </div>
          <div className="flexContainer movieListContainerLayout">
            {/* <Popular /> */}
            <BookmarksBox />
          </div>
        </section>
      </main>
      <footer>
        <Navigation />
      </footer>
    </>
  );
};

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/account/19377436/favorite/movies',
  params: {language: 'en-US', page: '1', sort_by: 'created_at.asc'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmIyZDM0NWU0NzUwMGRmNzQwMjc0ZDA3MmU5Zjg5YSIsInN1YiI6IjY0NTg5YjQ2MWI3MGFlMDBlMmFiYjllNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0aShnmkgu4yzQSX7t7uiYhvhrlfC7rU2LKl6ZftQuMI'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
    BookmarksBox.innerHTML=("test")
  })
  .catch(function (error) {
    console.error(error);
  });

// export const BookmarksViewData = async () => {
//   return await Promise.allSettled([
//     axios(
//       `https://api.themoviedb.org/3/movie/now_playing/?api_key=${
//         import.meta.env.VITE_TMDB_API_KEY
//       }`
//     ),
//     axios(
//       `https://api.themoviedb.org/3/movie/popular/?api_key=${
//         import.meta.env.VITE_TMDB_API_KEY
//       }`
//     ),
//   ]).then((data) => {
//     return {
//       nowShowing: data[0].value.data.results,
//       popular: data[1].value.data.results,
//     };
//   });
// };

export default Bookmarks;
