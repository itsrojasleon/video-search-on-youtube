import React from 'react';
import Loading from './loading';
import styled from 'styled-components';
import { convertDate } from '../../utils/helpers';

const Container = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  align-self: flex-start;
`;
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;
const SuperContainer = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  @media (max-width: 820px) {
    width: 90%;
  }
`;
class VideoEmbed extends React.Component {
  state = { isClicked: false };

  handleClick = () => {
    this.setState({ isClicked: !this.state.isClicked });
  };

  render() {
    if (!this.props.video) {
      return <Loading />;
    }
    if (this.props.video) {
      const { video } = this.props;
      const videoId = video.id.videoId;
      const url = `https://www.youtube.com/embed/${videoId}`;

      const { snippet } = this.props.video;
      return (
        <SuperContainer>
          <Container>
            <Iframe title="video" src={url} />
          </Container>
          <div>
            <h3>{snippet.title}</h3>
            <h4 style={{ color: 'rgb(150,150,150)' }}>
              Published on: {convertDate(snippet.publishedAt)}
            </h4>
          </div>
        </SuperContainer>
      );
    }
  }
}
export default VideoEmbed;
