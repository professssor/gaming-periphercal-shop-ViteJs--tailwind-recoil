import { createContext, useState } from "react";
import { products } from "../backend/db/products";

export const productState = createContext();

export default function ProductsStateProvider({ children }) {
  // the main products state copy to accessed globally
  const [selectedProducts, setSelectedProducts] = useState([...products]);

  // accessing categories from categories array

  //   to manage selected option in the radio filter of price
  const [selectedOption, setSelectedOption] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [allProducts, setAllProducts] = useState([...products]);
  const [cartArray, setCartArray] = useState([]); // aray to keep check of elements in cart
  const [added, setAdded] = useState(false); //for the toggling of button text based on this boolean
  const [wishlistArray, setWishlistArray] = useState([]);
  const [wisthListToggle, setWishListToggle] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
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

    // setSliderValue(0);
    // setSelectedProducts([...allProducts]);

    //  handling cart addition and subtration
  };
  const handleCart = (clickedObj) => {
    setAdded(true);
    setCartArray((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.id === clickedObj.id
      );
      return existingItem
        ? ((existingItem.quantity += 1), [...prevCart])
        : [...prevCart, { ...clickedObj, quantity: 1 }];
    });
  };

  const handleDeleteCartItem = (clickedObj) => {
    setAdded(false);
    setCartArray((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== clickedObj.id)
    );
  };

  // wishlist
  // to add value in wishlist
  const handleAddToWishlist = (clickedObj) => {
    setWishListToggle(true);
    setWishlistArray((prevWishlist) =>
      prevWishlist.some((item) => item.id === clickedObj.id)
        ? prevWishlist
        : [...prevWishlist, clickedObj]
    );
  };
  // to delete the value in wishlist
  const handleDeleteWishlistItem = (item) => {
    setWishListToggle(false);
    setWishlistArray((prevWishlist) =>
      prevWishlist.filter((wishlist) => wishlist.id !== item.id)
    );
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
        added,
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
      }}
    >
      {children}
    </productState.Provider>
  );
}
