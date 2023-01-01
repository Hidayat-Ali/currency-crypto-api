import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import Coin from "./Coin";

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toString().toLowerCase());
  });

  return (
    <div className="coin-app ">
      <h1 className="coin-search "> Search for Currency</h1>
      <form>
        <input
          type="text"
          className="coin-input "
          placeholder="search"
          onChange={handleChange}
        />
      </form>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
            name={coin.name}
          />
        );
      })}
    </div>
  );
}

export default App;
