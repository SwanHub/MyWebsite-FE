import React, {Component} from 'react'
import Twitter from './icons/Twitter'
import Medium from './icons/Medium'
import LinkedIn from './icons/LinkedIn'
import Github from './icons/Github'

export default class Home extends Component {

    state = {
        quotes: [],
        quote: '',
        person: ''
    }

    getNewQuote = () => {
        const num = Math.floor(Math.random() * this.state.quotes.length)
        this.setState({
            quote: this.state.quotes[num].Quote, 
            person: this.state.quotes[num].Person
        })
    }

    handleQuotes = (quotes) => {
        const num = Math.floor(Math.random() * quotes.length)
        this.setState({
            quotes: quotes,
            quote: quotes[num].Quote, 
            person: quotes[num].Person 
        })
    }

    componentDidMount(){
        fetch("https://custom-go-test.herokuapp.com/quotes")
        .then(r => r.json())
        .then(quotes => this.handleQuotes(quotes))
    }

    render(){
        return (
            <div className="home-container">
                <div className="socials">
                    <a target="_blank" href="https://www.linkedin.com/in/jackson-prince/"><LinkedIn /> </a>
                    <a target="_blank" href="https://twitter.com/JPrinceDev"><Twitter /></a>
                    <a target="_blank" href="https://medium.com/@jprincedev"><Medium /></a>
                    <a target="_blank" href="https://github.com/SwanHub"><Github /></a>
                </div>
                <div className="bio">{this.state.quote}
                    <p>- {this.state.person}</p>
                    <small onClick={this.getNewQuote}>[new quote]</small>
                </div>
            </div>
        )
    }
}
