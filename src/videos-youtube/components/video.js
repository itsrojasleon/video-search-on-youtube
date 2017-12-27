import React from 'react'
import SimpleVideo from './simple-video'

const Video = ({ videos, onVideoSelect }) => {
	return (
		<div>
			{videos.map(video => {
				return <SimpleVideo 
									key={video.etag} 
									video={video} 
									onVideoSelect={onVideoSelect}
								/>
			})}
		</div>
	)
}
export default Video