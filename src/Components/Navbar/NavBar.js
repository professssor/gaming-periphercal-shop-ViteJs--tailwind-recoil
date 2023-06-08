import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../../assets/editedLogo.png";
import { Link } from "react-router-dom";
import footerbg from "../../assets/footerbg2.jpg";
import { productState } from "../../State/ProductState";
import Cart from "../Cart/Cart";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const {
    cartArray,
    wishlistArray,
    allProducts,
    handleSearch,
    searchQuery,
    
    renderCart,
    setRenderCart,
  } = useContext(productState);

  const [searchVisible, setSearchVisible] = useState(false);
  // to render the search bar on the click of search icon
  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        background: `url(${footerbg})`,
        marginRight: "1rem",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        zIndex: 1,
        alignItems: "center",
      }}
    >
      <Link to="/">
        <div
          style={{
            display: "flex",
          }}
        >
          {" "}
          <img
            className="logo"
            src={logo}
            style={{
              height: "5rem",
              width: "8rem",
            }}
            alt="main_logo"
          />
          {/* <h4 style={{ color: "#df2e38" }}>THE GAMING STORE</h4> */}
        </div>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a onClick={handleSearchClick}>
          <SearchIcon />
        </a>
        {searchVisible && (
          <input
            value={searchQuery}
            onChange={(e) => handleSearch(e)}
            type="text"
            placeholder="Search"
            style={{
              color: "white",
              transition: "all 1s ease-in",
              outline: "1px solid red",
              width: "12rem",
              borderRadius: ".3rem",
              padding: ".4rem",
              background: "transparent",

              marginLeft: "5px",
              boxShadow: "none",
              border: "none", // Add this line to remove the border
            }}
          />
        )}
        {/* rendering the search results as the filter  */}

        <Link to="/wishlist">
          <p>
            Wishlist
            {wishlistArray.length >= 1 ? `(${wishlistArray.length})` : null}
          </p>
        </Link>
        <a onClick={() => setRenderCart(!renderCart)}>
          <p>Cart {cartArray.length >= 1 ? `(${cartArray.length})` : null}</p>
          {renderCart && <Cart />}
        </a>
        <a href="#">
          <Link to="/login">
            <Person2Icon />
          </Link>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
