import React from 'react'
import SimpleVideo from './simple-video'

const Video = ({ videos }) => {
	console.log(videos)
	return (
		<div>
			{videos.map(video => {
				return <SimpleVideo key={video.etag} video={video} />
			})}
		</div>
	)
}
export default Video