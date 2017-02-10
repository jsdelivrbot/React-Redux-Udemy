import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import KittenButton from './components/kitten_button';
const API_KEY = 'AIzaSyALte5dTVTAHAJEul12ColdfDOGEYSze5A';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('dogs');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);


    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
        <KittenButton kittenButtonClicked={() => this.videoSearch('kittens')} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
