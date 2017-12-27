import React from 'react'

const SimpleVideo = ({ video, onVideoSelect }) => {
	const image = video.snippet.thumbnails.default.url
	const title = video.snippet.title
	return (
		<div onClick={() => onVideoSelect(video)}>
			<div>
				<img src={image} alt={title}/>
			</div>
			<div>
				<div>{title}</div>
			</div>
		</div>
	)	
}
export default SimpleVideo