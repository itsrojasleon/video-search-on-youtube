import React from 'react';
import styled from 'styled-components';

const Video = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, 30px);
  grid-gap: 5px;
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    background: rgb(247, 247, 247);
  }
  @media (max-width: 820px) {
    width: 90%;
    margin: auto;
  }
`;
const Data = styled.div`
  padding: 10px;
`;

const SimpleVideo = ({ video, onVideoSelect }) => {
  const image = video.snippet.thumbnails.high.url;
  const title = video.snippet.title;
  return (
    <Video onClick={() => onVideoSelect(video)}>
      <div>
        <img style={{ width: '100%' }} src={image} alt={title} />
      </div>
      <Data>
        <div style={{ marginBottom: '10px' }}>{title}</div>
        <span style={{ color: '#727272' }}>{video.snippet.channelTitle}</span>
      </Data>
    </Video>
  );
};
export default SimpleVideo;
