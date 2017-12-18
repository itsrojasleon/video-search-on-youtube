import React from 'react'

const SimpleVideo = ({ video }) => {
	const image = video.snippet.thumbnails.default.url
	const title = video.snippet.title
	return (
		<div>
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