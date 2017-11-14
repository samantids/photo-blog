import React from "react";
import PhotoItem from "./photo_item";

const PhotoList = (props) => {
	const photoItems = props.photos.map((photo) => {
		return(
			<PhotoItem photoSrc={photo.url} />
		);		
	});

	return (
		<ul>
			{photoItems}
		</ul>
	)

};

export default PhotoList;