import React, { Component } from 'react';
import SearchBar from './videos-youtube/containers/search-bar';
import Video from './videos-youtube/components/video';
import VideoEmbed from './videos-youtube/components/video-embed';
import YTSearch from 'youtube-api-search';
import styled from 'styled-components';
import { API_KEY } from './utils/apiKey';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 80%;
  margin: auto;
  overflow: hidden;
  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    height: auto;
    width: 100%;
    justify-items: center;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('Bob Sponge');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    return (
      <div style={{ height: '100vh' }}>
        <SearchBar onSearch={term => this.videoSearch(term)} />
        <Grid>
          <VideoEmbed video={this.state.selectedVideo} />
          <Video
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </Grid>
      </div>
    );
  }
}
export default App;
