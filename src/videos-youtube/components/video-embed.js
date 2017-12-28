import React from 'react'
import Loading from './loading'
import styled from 'styled-components'

const Container = styled.div`
	position:relative;
	padding-bottom:56.25%;
	padding-top:30px;
	height:0;
	overflow:hidden;
`

const Iframe = styled.iframe`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
`

const SuperContainer = styled.div`
	width: 50%;
	margin: auto;
	border: 1px solid #ccc;
	padding: 10px;
	margin-bottom: 20px;
	@media(max-width: 820px) {
		width: 90%;
	}
`
class VideoEmbed extends React.Component {

	state = { isClicked: false }

	handleClick = () => {
		this.setState({ isClicked: !this.state.isClicked })
	}

	render() {
		if(!this.props.video) {
			return <Loading />
		}
		if(this.props.video) {
			const { video } = this.props
			const videoId = video.id.videoId
			const url = `https://www.youtube.com/embed/${videoId}`

			const style = {
				backgroundColor: '#D32F2F',
				color: '#fff',
				padding: '10px',
				fontSize: '18px',
				borderRadius: '6px',
				display: 'block',
				textAlign: 'center',
				margin: 'auto',
				width: '40%'
			}
			return (
				<SuperContainer>
					<Container>
						<Iframe title="video" src={url}></Iframe>
					</Container>
					<div>
						<p><i style={{
							fontSize: '30px'
						}} className="fa fa-user-secret" aria-hidden="true"></i> {video.snippet.channelTitle}</p>
						<h3>{video.snippet.title}</h3>
						<br />
						<div>
							{!this.state.isClicked
								? <button style={style} onClick={this.handleClick}>See description</button>
								: <p onClick={this.handleClick}>{video.snippet.description}</p> }
						</div>
					</div>
				</SuperContainer>
			)
		}
	}
}
export default VideoEmbed
