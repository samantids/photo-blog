import React from "react";

const PhotoItem = (props) => {
	const photoSrc = props.photoSrc;
	return(
		<div>
			<img src={photoSrc} alt="flip"/>
		</div>
	);
};

export default PhotoItem;