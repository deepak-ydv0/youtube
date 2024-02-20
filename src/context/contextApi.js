import React, { createContext, useEffect, useState } from "react";

import { fetchDataFromApi } from "../utills/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoding] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [selectCategories, setSelectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) => {
    setLoding(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      // console.log(contents);
      setSearchResult(contents);
      setLoding(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoding,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
