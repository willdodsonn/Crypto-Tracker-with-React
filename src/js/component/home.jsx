import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Coins from "./coins";
import Coin from "./Routes/Coin";
import Topbar from "./Navbar";
//include images into your bundle

//create your first component
const Home = () => {
	const [coins, setCoins] = useState([]);

	const url =
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setCoins(response.data);
				console.log(response.data[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Topbar />
			<Routes>
				<Route path="/" element={<Coins coins={coins} />} />
				<Route path="/coin" element={<Coin />}>
					<Route path=":coinId" element={<Coin />} />
				</Route>
			</Routes>
		</>
	);
};

export default Home;
