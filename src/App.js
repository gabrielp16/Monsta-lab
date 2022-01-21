import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Home from "./views/Home/Home";
import DetailMovie from "./views/DetailMovie/DetailMovie";

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'movie/:id', element: <DetailMovie /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;