import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './css/App.css';
import './css/Dot.css';
import './css/Games.css';
import './css/Header.css';
import './css/Experience.css';
import './css/Articles.css';
import './css/Projects.css';

import Main from './components/Main'
import NavBar from './components/NavBar'

class App extends Component {

  state = {
    projects: [], 
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
    fetch('https://jackprince-dev-be.herokuapp.com/')
      .then(r => r.json())
      .then(r => this.setState({ projects: r.projects, articles: r.articles}))
  }

  render(){
    const style = {
      backgroundColor: `rgb(120,${parseInt(this.state.left)/3},240)`
    }

    if (this.state.openingView) {
      return (
        <div className="blank" onMouseMove={(event) => this.setState({left: event.clientX, top: event.clientY})}>
            <div id="dot" style={style} onClick={this.handleOpen}></div>
        </div>
      );
      } else {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Main projects={this.state.projects} articles={this.state.articles}/>
        </div>
      </Router>
    )}
    }
  }

  

export default App;
