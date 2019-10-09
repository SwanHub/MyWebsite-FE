import React, {Component} from 'react'

export default class Article extends Component {

    state = {
        active: false
    }

    handleHoverToggle= () => {
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        return (
            <div className="article"
                    onMouseEnter={this.handleHoverToggle} 
                    onMouseLeave={this.handleHoverToggle}>
                <a target="_blank" href={this.props.article.Url}>
                    <h3 className="article-title"><span className="article-pointer">&#9758;</span>{this.props.article.Title}</h3>
                </a>
                <div className={this.state.active ? "show" : "hide"}>
                    <small className="article-date">{this.props.article.Date}</small> | 
                    <small className="article-claps">Claps {this.props.article.Claps}</small>
                    <p className="article-publisher">Publisher: {this.props.article.Publisher}</p>
                        
                    <p className="article-description">{this.props.article.Description}</p>
                </div>
            </div>
        )
    }
}

// onMouseEnter={this.handleHoverToggle} 
                    // onMouseLeave={this.handleHoverToggle}
