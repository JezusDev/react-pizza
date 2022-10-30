import React, { useState } from "react";
import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Cart from "./pages/Cart/Cart";
import { AppContext } from "./context";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/filterSlice";

function App(props) {
  const [searchValue, setSearchValue] = useState("");

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="wrapper">
        <AppContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </AppContext.Provider>
        <div className="counter">
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span>{count}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
