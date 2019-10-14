import React, { Component } from 'react'

export default class Piece extends Component {

    handleClick = (event) => {
        if ((this.props.currentMove === 'swap' && this.props.activePieces !== 2) || (this.props.currentMove === 'jump' && this.props.activePieces !== 3)){
            const id = parseInt(event.target.id.slice(-1))
            this.props.setActivePieces(id)
        }
    }

    handleJumpClick = (event) => {
        this.props.jump(event.target.id)
    }

    render(){
        const {i, board} = this.props
        return (
            <>
                {this.props.currentMove === 'jump' ? <span className="jump-pointer" onClick={this.handleJumpClick} id={`jump-point-${i}`}>☟</span> : null}
                    <div 
                        id={`piece-${i}`} 
                        className={this.props.active && (this.props.currentMove === 'swap' || this.props.currentMove === 'jump') ? "active-piece" : "inscrutable-piece"} 
                        key={i+1}
                        onClick={this.handleClick}
                    >
                            {board[i]}
                    </div>
                {this.props.currentMove === 'jump' && i === 8 ? <span className="jump-pointer" onClick={this.handleJumpClick} id="jump-point-9">☟</span> : null}
            </>
        )
    }
}
