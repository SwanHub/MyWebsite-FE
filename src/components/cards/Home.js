import React, {Component} from 'react'
import Twitter from './icons/Twitter'
import Medium from './icons/Medium'
import LinkedIn from './icons/LinkedIn'

export default class Home extends Component {

    state = {
        quote: ''
    }

    componentDidMount(){
        fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1&cat=famous", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
                "x-rapidapi-key": "ecfd02be6bmsh8fef1ed895603ccp1ceb8djsnc72b0f90251f",
                "content-type": "application/x-www-form-urlencoded"
            }})
        .then(r => r.json())
        .then(r => this.setState({quote: r[0]}))
    }

    handleClick = () => {
        fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?count=1&cat=famous", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
                "x-rapidapi-key": "ecfd02be6bmsh8fef1ed895603ccp1ceb8djsnc72b0f90251f",
                "content-type": "application/x-www-form-urlencoded"
            }})
        .then(r => r.json())
        .then(r => this.setState({quote: r[0]}))
    }


    render(){
        return (
            <div className="home-container">
                <div className="socials">
                    <a target="_blank" href="https://twitter.com/JPrinceDev"><Twitter /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/jackson-prince/"><LinkedIn /> </a>
                    <a target="_blank" href="https://medium.com/@jprincedev"><Medium /></a>
                </div>
                <div className="bio">{this.state.quote.quote}
                    <p>- {this.state.quote.author}</p>
                    <small onClick={this.handleClick}>[new quote]</small>
                </div>
            </div>
        )
    }
}
