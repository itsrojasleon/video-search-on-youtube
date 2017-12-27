import React from 'react'
import Loading from './loading'

const VideoEmbed = ({ video }) => {

	if(!video) {
		return <Loading />
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
