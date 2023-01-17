import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "@routes";
import { DefaultLayout } from "@layouts";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          }
        })}
      </Routes>
    </Router>
  );
}

export default App;
