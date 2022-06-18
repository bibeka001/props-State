import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./ReduxPSA/Navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "./ReduxPSA/rdx/Store";
import Message from "./ReduxPSA/Message/Message";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/reduxEx" element={<Message />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
export default App;
