import React from 'react'

const VideoEmbed = ({ video }) => {

	if(!video) {
		return <div>Loading...</div>
	}
	const videoId = video.id.videoId
	const url = `https://www.youtube.com/embed/${videoId}`

	return (
		<div>
			<div>
				<iframe title="video" src={url}></iframe>
			</div>
		</div>
	)
}
export default VideoEmbed
