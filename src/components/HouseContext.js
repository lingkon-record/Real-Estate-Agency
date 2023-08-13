import React, { useState, useEffect, createContext } from "react";

import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");

  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicate country
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];

    setCountries(uniqueCountries);
  }, []);

  // properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicate country
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];

    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // include
    const isDefault = (str) => {
      return str.split("").includes("(any)");
    };

    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      const countryFilter =
        country === "Location (any)"
          ? true
          : house.country?.toLowerCase() === country?.toLowerCase();
      const typeFilter =
        property === "Property type (any)"
          ? true
          : house.type?.toLowerCase() === property?.toLowerCase();
      const priceFilter =
        price === "Price range (any)"
          ? true
          : housePrice >= minPrice && housePrice <= maxPrice;

      console.log(countryFilter, property, priceFilter);

      if (countryFilter && typeFilter && priceFilter) {
        return house;
      }

      // 01
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not deafult
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // 03 - if property is not deafult
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not deafult
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not deafult
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country & price is not deafult
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // property & price is not deafult
      if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    // console.log(newHouses);

    setTimeout(() => {
      return newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
      setLoading(false);
    });
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
