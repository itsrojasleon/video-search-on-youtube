import React, { Component } from 'react';
import SearchBar from './videos-youtube/containers/search-bar'
import Video from './videos-youtube/components/video'
import VideoEmbed from './videos-youtube/components/video-embed'
import YTSearch from 'youtube-api-search'
import Footer from './videos-youtube/components/footer'

import styled from 'styled-components'

const API_KEY = 'AIzaSyA-HhHRzj_axarvIV8LnIwG9NZ2OvTfSrs'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  width: 80%;
  height: 87vh;
  margin: auto;
  overflow: hidden;
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('javascript')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div style={{height: '100vh'}}>
        <SearchBar onSearch={term => this.videoSearch(term)} />
        <Grid>
          <VideoEmbed video={this.state.selectedVideo} />
          <Video
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
