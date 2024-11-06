import React from "react";
import Labs from "./Labs";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import { Provider } from "react-redux";
import store from "./Kanbas/store";

//sets up routes to display components like Labs or Kanbas
//top-level component that organizes the routing structure for the application
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            {/*   redirects from root / to /Labs   */}
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            {/* /Kanbas is the route path, when user navigate to /Kanbas in the URL, they will dee the content defined in the <Kanbas /> component */}
            {/* <Kanbas /> is the component that will be shown when this path is active */}
            {/* /* allows for nexted routes */}
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}
