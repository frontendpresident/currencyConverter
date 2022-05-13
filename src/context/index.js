import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getRates } from "../services";

export const RatesContext = React.createContext(null);

const RatesProvider = ({ children }) => {
  const { isLoading, data } = useQuery("rates", getRates);
  const [ratesData, setRatesData] = useState([]);
  const [currencyValue2, setCurrencyValue2] = useState(0);
  const [currencyValue1, setCurrencyValue1] = useState(1);
  const [defaultCurrency, setDefaultCurrency] = useState(null);

  useEffect(() => {
    getDefaultCurrency();
  }, []);

  const handleChangeCurrency = (value, convertValue, currencyNumber) => {
    let currentValue;
    const currency1 = ratesData.find((item) => item.name === value).value;
    const currency2 = ratesData.find(
      (item) => item.name === convertValue,
    ).value;
    if (currencyNumber === 1) {
      currentValue = ((currency2 / currency1) * currencyValue1).toFixed(3);
      setCurrencyValue2(currentValue);
    } else {
      currentValue = ((currency1 / currency2) * currencyValue2).toFixed(3);
      setCurrencyValue1(currentValue);
    }
  };

  const setFavoriteCurrency = (id) => {
    const newRatesList = ratesData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          favorites: !item.favorites,
        };
      }
      return item;
    });

    newRatesList.sort((item) => {
      if (item.favorites) {
        return -1;
      }
    });

    setRatesData(newRatesList);
  };

  const getDefaultCurrency = () => {
    const defaultValue = localStorage.getItem("currency");

    if (defaultValue) {
      setDefaultCurrency(defaultValue);
    } else {
      setDefaultCurrency("USD");
    }
  };

  const handleChangeDefaultCurrency = (currency) => {
    setDefaultCurrency(currency);
    localStorage.setItem("currency", currency);
  };

  const getRatesData = () => {
    let rates = [];

    if (!isLoading && data) {
      rates = Object.entries(data.rates).map(([key, value], index) => ({
        name: key,
        value,
        id: index,
        favorites: false,
      }));
      setRatesData(rates);
      const initialRate = rates.find((item) => item.name === "RUB").value;
      setCurrencyValue2(initialRate);
    }
  };

  const getConvertValue = (
    number,
    value = "USD",
    convertValue = "RUB",
    isValue,
  ) => {
    const currency1 = ratesData.find((item) => item.name === value);
    const currency2 = ratesData.find((item) => item.name === convertValue);
    let totalRate;

    if (isValue) {
      totalRate = ((currency2.value / currency1.value) * number).toFixed(3);
      setCurrencyValue1(number);
      setCurrencyValue2(totalRate);
    } else {
      totalRate = ((currency1.value / currency2.value) * number).toFixed(3);
      setCurrencyValue2(number);
      setCurrencyValue1(totalRate);
    }
  };

  return (
    !isLoading && (
      <RatesContext.Provider
        value={{
          getRatesData,
          ratesData,
          currencyValue2,
          currencyValue1,
          getConvertValue,
          getDefaultCurrency,
          defaultCurrency,
          handleChangeDefaultCurrency,
          setFavoriteCurrency,
          handleChangeCurrency,
        }}
      >
        {children}
      </RatesContext.Provider>
    )
  );
};

export default RatesProvider;
