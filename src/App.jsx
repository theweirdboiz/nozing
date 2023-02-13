import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@routers";
import { DefaultLayout } from "@layouts";
import { SearchAll } from "@pages/Search";
import {
  SearchArtist,
  SearchMv,
  SearchPlaylist,
  SearchSong,
} from "./pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = <></>;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            >
              {route.id === "search" && (
                <>
                  <Route path={"tat-ca"} element={<SearchAll />} />
                  <Route path={"bai-hat"} element={<SearchSong />} />
                  <Route path={"playlist"} element={<SearchPlaylist />} />
                  <Route path={"artist"} element={<SearchArtist />} />
                  <Route path={"video"} element={<SearchMv />} />
                </>
              )}
            </Route>
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
