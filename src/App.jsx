import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Video from './Video';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      query: '',
      videos: []
    }
  }

  searchVideos(){
    const BASE_URL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDZt8C-VHCKndsP27DTlkE5Skvjmrm1cUE";
    const FETCH_URL = `${BASE_URL}&q=${this.state.query}&type=video&part=snippet&maxResults=10`;
    fetch(FETCH_URL,{
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const videos = json.items;
      this.setState({videos});
    })
  }

  render(){
    return(
      <div className="App">
        <div className="App-title">Welcome to HashMusic!!!</div>
        <div>Type in any video,song title or an artist name</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Enter Artist..."
              value={this.state.query}
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {if(event.key === 'Enter'){
                this.searchVideos();
              }}}
             />
            <InputGroup.Addon onClick={() => this.searchVideos()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Video videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;
