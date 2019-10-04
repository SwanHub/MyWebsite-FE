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
        if (this.state.active) {
            return (
                <div className="article"
                        onMouseEnter={this.handleHoverToggle} 
                        onMouseLeave={this.handleHoverToggle}>
                    <a target="_blank" href={this.props.article.Url}>
                        <h3 className="article-title"><span className="pointer">&#9758;</span>{this.props.article.Title}</h3>
                    </a>
                    <p className="article-publisher">Publisher: {this.props.article.Publisher}</p>
                        <small className="article-claps">Claps {this.props.article.Claps}</small>
                    <p className="article-description">{this.props.article.Description}</p>
                </div>
            )
        } else {
            return( 
                <div className="article" 
                        onMouseEnter={this.handleHoverToggle} 
                        onMouseLeave={this.handleHoverToggle}>
                    <a target="_blank" href={this.props.article.Url}>
                        <div className="title-view">
                            <h3 className="article-title">{this.props.article.Title}</h3>
                            <small className="article-date" style={{marginLeft: '20px'}}>{this.props.article.Date}</small>
                        </div>
                    </a>
                </div>
            )
        }
    }
}

// onMouseEnter={this.handleHoverToggle} 
                    // onMouseLeave={this.handleHoverToggle}
