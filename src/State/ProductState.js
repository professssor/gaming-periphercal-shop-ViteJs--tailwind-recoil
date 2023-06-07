import { createContext, useState } from "react";

import { useItemsData } from "./ApiCallState";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { toast } from "react-hot-toast";

export const productState = createContext();

export default function ProductsStateProvider({ children }) {
  const { categories, products } = useItemsData();

  // the main products state copy to accessed globally
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  // to set the product dta

  // accessing categories from categories array

  //   to manage selected option in the radio filter of price
  const [selectedOption, setSelectedOption] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [allProducts, setAllProducts] = useState([...products]);
  const [cartArray, setCartArray] = useState([]); // aray to keep check of elements in cart
  console.log(allProducts);
  const [wishlistArray, setWishlistArray] = useState([]);
  const [wisthListToggle, setWishListToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  // for toggling rendering of cart  on screen
  const [renderCart, setRenderCart] = useState(false);
  useEffect(() => {
    if (products.length > 0) {
      setSelectedProducts([...products]);
      setAllProducts([...products]);
    }
  }, [products]);
  // declaring the local storage variables
  useEffect(() => {
    const storedCartArray = localStorage.getItem("cartArray");
    if (storedCartArray) {
      setCartArray(JSON.parse(storedCartArray));
    }
  }, []);
  useEffect(() => {
    const storedWishlistArray = localStorage.getItem("wishlistArray");
    if (storedWishlistArray) {
      setWishlistArray(JSON.parse(storedWishlistArray));
    }
  }, []);
  // initializing the local storage variables
  useEffect(() => {
    localStorage.setItem("cartArray", JSON.stringify(cartArray));
  }, [cartArray]);

  useEffect(() => {
    localStorage.setItem("wishlistArray", JSON.stringify(wishlistArray));
  }, [wishlistArray]);

  // Handle sorting or filtering here
  const handlePriceToggle = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    const priceOrientedProductArray = [...selectedProducts].sort((a, b) => {
      if (value === "asc") {
        return a.price - b.price;
      }
      if (value === "desc") {
        return b.price - a.price;
      }
    });

    setSelectedProducts(priceOrientedProductArray);
  };
  // handling slider toggle of prices

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);
    setSelectedProducts(
      allProducts.filter((product) => product.price <= value)
    );
  };
  const handleCart = (clickedObj) => {
    setCartArray((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === clickedObj.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        setTimeout(() => {
          toast(
            "item already exist in  the cart , furthur clicks will increase the product quantity"
          );
        }, 700);

        return [...prevCart];
      } else {
        const newCartItem = { ...clickedObj, quantity: 1 };
        toast.success("Added to cart");
        return [...prevCart, newCartItem];
      }
    });
  };

  const handleDeleteCartItem = (clickedObj) => {
    setCartArray((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== clickedObj.id)
    );
    toast.success("item removed from cart ");
  };

  // wishlist
  // to add value in wishlist
  const handleAddToWishlist = (clickedObj) => {
    if (wishlistArray.some((item) => item.id === clickedObj.id)) {
      // Item already exists in wishlist, no action needed
      return;
    }

    setWishlistArray((prevWishlist) => [...prevWishlist, clickedObj]);
    toast.success("Added to wishlist");
  };

  // to delete the value in wishlist
  const handleDeleteWishlistItem = (item) => {
    setWishlistArray((prevWishlist) =>
      prevWishlist.filter((wishlist) => wishlist.id !== item.id)
    );
    toast.success("item removed from wishlist ");
  };

  // for handling the search functionality

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
    // this bit is to make sure if the search query is empty the search is not continued forward , stopping the function to uncondionally rendering all the products
    if (searchQuery.trim() === "") {
      setSearchedProducts([]);
      return;
    }

    const filteredProducts = allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedProducts(filteredProducts);
  };

  return (
    <productState.Provider
      value={{
        selectedProducts,
        setSelectedProducts,
        handlePriceToggle,
        setSelectedOption,
        handleSliderChange,
        sliderValue,
        allProducts,
        handleCart,
        cartArray,
        handleDeleteCartItem,

        handleAddToWishlist,
        wishlistArray,
        handleDeleteWishlistItem,
        wisthListToggle,
        searchedProducts,
        handleSearch,
        searchQuery,
        setSliderValue,
        setSearchQuery,
        setSelectedOption,
        renderCart,
        setRenderCart,
      }}
    >
      {children}
    </productState.Provider>
  );
}
