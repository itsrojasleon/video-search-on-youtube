import React from 'react'
import styled from 'styled-components'

const Video = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(5, 30px);
	grid-gap: 5px;
	&:hover {
		cursor: pointer;
	}
	@media(max-width: 820px) {
		width: 100%;
	}
`

const SimpleVideo = ({ video, onVideoSelect }) => {
	const image = video.snippet.thumbnails.high.url
	const title = video.snippet.title
	return (
		<Video onClick={() => onVideoSelect(video)}>
			<div>
				<img style={{width: '100%'}} src={image} alt={title}/>
			</div>
			<div>
				<div style={{marginBottom: '10px'}}>{title}</div>
				<span style={{color: '#727272'}}>{video.snippet.channelTitle}</span>
			</div>
		</Video>
	)
}
export default SimpleVideo
