import React, { Component } from 'react';
import SearchBar from './videos-youtube/containers/search-bar'
import Video from './videos-youtube/components/video'
import VideoEmbed from './videos-youtube/components/video-embed'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyA-HhHRzj_axarvIV8LnIwG9NZ2OvTfSrs'

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
    YTSearch({key: API_KEY, term : term}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar onSearch={term => this.videoSearch(term)} />
        <VideoEmbed video={this.state.selectedVideo} />
        <p style={{
          color: '#727272',
          textAlign: 'center',
          marginTop: '20px'
        }}>Other videos</p>
        <Video
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        />
      </div>
    );
  }
}

export default App;
