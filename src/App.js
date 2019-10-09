import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './css/App.css';
import './css/Dot.css';
import './css/Games.css';
import './css/Header.css';
import './css/BottomBar.css';
import './css/Articles.css';
import './css/Projects.css';

import Main from './components/Main'
import NavBar from './components/NavBar'
import BottomBar from './components/BottomBar'

class App extends Component {

  state = {
    projects: {}, 
    articles: [],
    openingView: true, 
    left: '',
    top: ''
  }

  handleOpen = () => {
    this.setState({
      openingView: false
    })
  }

  componentDidMount(){
    fetch('https://custom-go-test.herokuapp.com/projects')
      .then(r => r.json())
      .then(r => this.setState({ projects: r}))
  }

  render(){
    const dotStyle = {
      backgroundColor: `rgb(${this.state.top/5},122,${this.state.left/5})`
    }

    // if (this.state.openingView) {
    //   return (
    //     <div className="blank" onMouseMove={(event) => this.setState({left: event.clientX, top: event.clientY})}>
    //         <div id="dot" style={dotStyle} onClick={this.handleOpen}></div>
    //     </div>
    //   );
    //   } else {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Main projects={this.state.projects} articles={this.state.articles}/>
          <BottomBar />
        </div>
      </Router>
    )
  // }
    }
  }

  

export default App;
