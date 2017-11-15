import React from "react";
import PhotoItem from "./photo_item";

const PhotoList = (props) => {
	const photoItems = props.photos.map((photo) => {
		return(
			<PhotoItem 
				photoSrc={photo.url}
				key={photo.id} />
		);		
	});

	return (
		<ul>
			{photoItems}
		</ul>
	)

};

export default PhotoList;