import React from 'react'
import Article from '../cards/Article'
import Medium from '../cards/icons/Medium'

export default function ArticleContainer(props) {

    const renderArticles = () => {        
        return props.articles.map(article => {
            return <Article article={article}/>
        })
    }
    
    return (
        <div className="articles-container">
            <Medium />
            <span>Published Medium Articles</span>
            {renderArticles()}
        </div>
    )
}
