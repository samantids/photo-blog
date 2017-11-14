import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import PhotoList from "./components/photo_list";
import PhotoItem from "./components/photo_item";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message : null,
      fetching: true,
      photos: []
    };
  }

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

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div>
          <PhotoList photos = {this.state.photos}/>
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
