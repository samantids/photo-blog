import React from "react";

const Header = () => {
	return(
		<div className="navbar">
			<div className="navbar-left">
				SAMANTHA SCHWARTZ
			</div>
			<div className="navbar-right">
				<a href="/import">
					<img src="images/instagram.svg" alt="instagram logo" />
				</a>
			</div>
		</div>
	);
};

export default Header;