import React from 'react'
import styled from 'styled-components'

const Video = styled.div`
	width: 25%;
	margin-bottom: 20px;
	text-align: center;
	&:hover {
		cursor: pointer;
	}
	@media(max-width: 820px) {
		width: 100%;
	}
`

const SimpleVideo = ({ video, onVideoSelect }) => {
	const image = video.snippet.thumbnails.default.url
	const title = video.snippet.title
	return (
		<Video onClick={() => onVideoSelect(video)}>
			<div>
				<img style={{ height: '100px', width: 'auto' }} src={image} alt={title}/>
			</div>
			<div>
				<div style={{marginBottom: '10px'}}>{title}</div>
				<span style={{color: '#727272'}}>{video.snippet.channelTitle}</span>
			</div>
		</Video>
	)
}
export default SimpleVideo
