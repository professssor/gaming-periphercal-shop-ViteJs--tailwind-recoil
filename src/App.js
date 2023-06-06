import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MockAPI from "./pages/Mockman";
import Navbar from "./Components/Navbar/NavBar";
import SliderButton from "./Components/SliderButton/SliderButton";
import Footer from "./Components/Footer/Footer";
import ProductCategory from "./Components/ProductCategory/ProductCategory";
import Products from "./Components/Products/Products";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import SinglePageProducts from "./Components/SinglePageProduct/SinglePageProduct";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/wishlist/Wishlist";
import bgproduct from "../src/assets/bgproduct.avif";
import SearchResult from "./Components/SearchResults/SearchResult";
import SignIn from "./Components/Profile/SignIn";
import Login from "./Components/Profile/Login";
import { PrivatePage } from "./pages/Privatepage";

function App() {
  return (
    <div
      style={{
        background: `url(${bgproduct})`,
      }}
      className="App"
    >
      <Navbar />
      <SearchResult />
      <Routes>
        {/* for the default component */}
        <Route
          path="/"
          element={
            <>
              <SliderButton />
              <ProductCategory />
              <Footer />
            </>
          }
        />
        {/* for the products page */}
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/product/:productId" element={<SinglePageProducts />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="*" element={<ErrorPage />} />
        {/* private routes */}
        <Route element={<PrivatePage />}>
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
