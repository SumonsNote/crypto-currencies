import React, { useEffect, useState } from "react";
import CoinCard from "../CoinCard/CoinCard";
import Spinner from "../Spinner/Spinner";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setLoading(true)
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setCoins(data)});
  }, []);
  return (
    <>
        {

            loading ? <Spinner></Spinner> : <div>
      <p className="py-4 mx-auto text-4xl text-center font-bold">
        Available Crypto Currencies
      </p>
      <p className="py-4 mx-auto text-2xl text-center font-bold">
        Total Coins: {coins.length}
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-4">
        {coins.map((coin) => (
          <CoinCard coin={coin} key={coin.id}></CoinCard>
        ))}
      </div>
    </div>
        }
    </>
  );
};

export default Coins;
