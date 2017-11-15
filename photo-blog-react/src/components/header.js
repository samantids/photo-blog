import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: null
    };
  }

	render(){
		return(
			<div className="navbar">
				<div className="navbar-left">
					SAMANTHA SCHWARTZ
				</div>
				<div className="navbar-right">
					<a href="/import" onClick={this.props.toggleFlickrImport}>
						<img src="images/instagram.svg" alt="instagram logo" />
					</a>
				</div>
			</div>
		);
	};
};

export default Header; 