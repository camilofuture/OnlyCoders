import React from "react";

const MainRoot = ({ children }) => {
	return (
		<div>
			<header
				style={{
					color: "#fff",
				}}
			>
				<div
					style={{
						fontFamily: "var(--font-logo)",
						fontSize: 24,
						marginTop: 25,
						marginLeft: 35,
						display: "flex",
					}}
				>
					<div>ONLYCODERS</div>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
};

export default MainRoot;
