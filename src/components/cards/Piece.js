import React, { Component } from 'react'

export default class Piece extends Component {

    state = {
        active: false
    }

    handleClick = (event) => {
        const id = parseInt(event.target.id.slice(-1))
        this.props.setActivePieces(id)
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        const {i, board} = this.props
        return (
            <div id={`piece-${i}`} 
                    className={this.state.active 
                        ? "active-piece" 
                        : "inscrutable-piece"} 
                    key={i+1}
                    onClick={this.handleClick}
                    >
                    {board[i]}
            </div>
        )
    }
}
