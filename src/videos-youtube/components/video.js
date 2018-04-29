import React from 'react'
import SimpleVideo from './simple-video'
import styled from 'styled-components'

const ContainerVideo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 70%;
	overflow: auto;
	@media(max-width: 820px) {
		flex-direction: column;
	}
`

const Video = ({ videos, onVideoSelect }) => {
	return (
		<ContainerVideo>
			{videos.map(video => {
				return <SimpleVideo
									key={video.etag}
									video={video}
									onVideoSelect={onVideoSelect}
								/>
			})}
		</ContainerVideo>
	)
}
export default Video
