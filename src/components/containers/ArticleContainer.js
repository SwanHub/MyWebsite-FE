import React from 'react'
import Article from '../cards/Article'

export default function ArticleContainer(props) {

    const renderArticles = () => {        
        return props.articles.map(article => {
            return <Article title={article.title}/>
        })
    }
    
    return (
        <div className="articles-container">
            Articles Container!
            {renderArticles()}
        </div>
    )
}
