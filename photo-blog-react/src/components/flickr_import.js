import React, {Component} from "react";

class FlickrImport extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: false
		}
	}


	render() {
		return (
			<div className="flickr-import">
				This is where the flickr import tool will go
			</div>
		);
	};
};

export default FlickrImport;