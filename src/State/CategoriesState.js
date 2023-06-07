import { createContext, useState } from "react";
// import { categories } from "../backend/db/categories";
import { useItemsData } from "./ApiCallState";

export const categoryState = createContext();
export default function CategoriesStateProvider({ children }) {
  const { categories, products } = useItemsData();

  const [selectedCategories, setSelectedCategories] = useState([]);

  // function to handle the click state of checkbox realtime
  const handleCategoryFunction = (value) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((category) => category !== value)
        : [...prevCategories, value]
    );
  };

  return (
    <categoryState.Provider
      value={{
        categories,
        handleCategoryFunction,
        selectedCategories,
        setSelectedCategories,
      }}
    >
      {children}
    </categoryState.Provider>
  );
}
