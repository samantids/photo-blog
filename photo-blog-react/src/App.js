import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import PhotoList from "./components/photo_list";
import FlickrImport from "./components/flickr_import";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message : null,
      fetching: true,
      photos: [],
      //isFlickrVisible: false
    };
  }

  //testing fetching info from express server
  componentDidMount(){
    fetch("/test")
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false,
          photos: json.photos
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  };


  //function to show/hide flickr import ui
  toggleFlickrImport(e) {
    //const isFlickrVisible = this.props.isFlickrVisible;
    e.preventDefault();
    console.log("you clicked the thing");
    //this.setState({isFlickrVisible: true});
    //console.log(this.state.isFlickrVisible);
  };
  

  render() {
    return (
      <div className="App">
        <div className="flickr-import-container" 
          //{this.state.isFlickrVisible && className="visibility--hidden"}
          >
          <FlickrImport />
        </div>
        <div className="App-header">
          <Header toggleFlickrImport={this.toggleFlickrImport} />
        </div>
        <div>
          <PhotoList photos={this.state.photos} />
          <p className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
