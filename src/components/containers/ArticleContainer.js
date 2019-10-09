import React, {Component} from 'react'
import Article from '../cards/Article'
import Medium from '../cards/icons/Medium'

export default class ArticleContainer extends Component{

    state = {
        articles: []
    }

    componentDidMount(){
        fetch('https://custom-go-test.herokuapp.com/articles')
            .then(r => r.json())
            .then(r => this.setState({ articles: r}))
    }

    renderArticles = () => {        
        return this.state.articles.map(article => {
            return <Article article={article}/>
        })
    }

    render(){
        return (
            <div className="articles-container">
                <Medium />
                <span>Published Medium Articles</span>
                {this.renderArticles()}
            </div>
        )
    }
}
