import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
const Topbar = () => {
	const url =
		"https://thumbs.dreamstime.com/b/neon-bitcoin-logo-crypto-currency-illuminated-glowing-icon-sign-digital-money-investment-concept-block-chain-finance-symbol-vector-110685190.jpg";

	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="#home" className="navbar-brand">
						<img
							alt=""
							src={url}
							width="40"
							height="40"
							className="icon"
						/>{" "}
						Crypto Counter
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default Topbar;
