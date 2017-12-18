import React, { Component } from 'react';
import SearchBar from './components/search-bar'
import Video from './components/video'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyA-HhHRzj_axarvIV8LnIwG9NZ2OvTfSrs'

class App extends Component {

  state = {
    videos: []
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term : 'react'}, (videos) => {
      this.setState({videos})
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Video videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
