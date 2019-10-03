import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProjectContainer from './containers/ProjectContainer'
import GamesContainer from './containers/GamesContainer'
import ArticleContainer from './containers/ArticleContainer'
import Experience from './cards/Experience'
import Home from './cards/Home'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/projects" render={() => 
                    <ProjectContainer projects={this.props.projects}/>
                    }/>
                <Route exact path="/games" component={GamesContainer}/>
                <Route exact path="/articles" render={() =>
                    <ArticleContainer articles={this.props.articles}/>
                }/>
                <Route exact path="/experience" component={Experience}/>
            </div>            
        )
    }
}
