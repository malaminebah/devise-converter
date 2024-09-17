import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiZap } from "react-icons/fi";
import styles from "./currencyConverter.module.css";

const CurrencyConverter = () => {
  const [euroRates, setEuroRates] = useState<{ [key: string]: number }>({});
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [showConverter, setShowConverter] = useState<boolean>(true);
  const [euroToDollarRate, setEuroToDollarRate] = useState(null);

  
  useEffect(() => {
    const fetchEuroRates = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/currency/euro-rates"
        );
        const usdRate = response.data.USD;
        setEuroToDollarRate(usdRate);
        setEuroRates(response.data);
        console.log(response.data.USD);
      } catch (error) {
        console.error("Error fetching Euro rates:", error);
      }
    };

    fetchEuroRates();
  }, []);

  const handleConvert = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/currency/convert`,
        {
          params: { from: fromCurrency, to: toCurrency, amount },
        }
      );
      setConvertedAmount(response.data.convertedAmount);
    } catch (error) {
      console.error("Error converting currency:", error);
    }
  };

  return (
    <div className={styles.converterContainer}>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setShowConverter(true)}
          className={styles.showButton}
        >
          Converter
        </button>
        <button
          onClick={() => setShowConverter(false)}
          className={styles.showButton}
        >
          Charts
        </button>
      </div>
      <div className={styles.underline}></div>
      {showConverter ? (
        <div>
          <div className="mb-4">
            <div>
              {euroToDollarRate ? (
                <p className={styles.deviseRateUsd}>
                  1 EUR ={" "}
                  <strong className={styles.usd}>
                    {euroToDollarRate} US Dollar
                  </strong>
                </p>
              ) : (
                <p>Chargement du taux de change...</p>
              )}
            </div>
          </div>
          <div className={styles.testFlex}>
            <div className={styles.columnCurrency}>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className={styles.input}
              />
              {convertedAmount !== null && (
                <div className="mt-4">
                  <input
                    className={styles.input}
                    value={convertedAmount.toFixed(2)}
                    readOnly
                  />
                </div>
              )}
            </div>

            <div className={styles.currencyLabel}>
              <div>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className={styles.currencySelect}
                >
                  {Object.keys(euroRates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className={styles.currencySelect}
                >
                  {Object.keys(euroRates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button onClick={handleConvert} className={styles.converterButton}>
            Convert
          </button>
        </div>
      ) : (
        <div className={styles.subscriptionMessage}>
          <h2>Track currencies</h2>
          Upgrade to premium to track currencies and even more
          <button className={styles.cryptoButton}>
            {" "}
            <FiZap /> Upgrade to premium
          </button>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
