import React, { Component } from 'react'
import Piece from './Piece'
import Directions from './Directions'
import ArrowR from './icons/ArrowR'
import ArrowL from './icons/ArrowL'
import ThumbsUp from './icons/ThumbsUp'

export default class Inscrutable extends Component {

    state = {
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        activePieces: [],
        movesRemain: 4,
        status: 'inactive',
        view: 'pregame',
        currentMove: ''
    }

    // later, will need to give user ability to switch tile choice mid-swap turn. 
    setActivePieces = (id) => {
        if (this.state.currentMove === 'swap'){
            if (this.state.activePieces.length < 2){
                const newSet = this.state.activePieces 
                newSet.push(id)

                this.setState({
                    activePieces: newSet
                })
            }
        } else if (this.state.currentMove === 'jump'){
            if (this.state.activePieces.length < 3){
                const newSet = this.state.activePieces 
                newSet.push(id)
        
                this.setState({
                    activePieces: newSet
                })
            }
        }
    }

    renderTiles = () => {
        let board = []
        for (let i = 0; i < 9; i++){
            board.push(<Piece 
                        i={i} 
                        board={this.state.board} 
                        setActivePieces={this.setActivePieces}
                        currentMove={this.state.currentMove}
                        activePieces={this.state.activePieces.length}
                        active={this.state.activePieces.includes(i) ? true : false}
                        key={i} 
                        jump={this.jump}
                        />)
        }
        return board
    }

    // development, helper method
    renderActiveTiles = () => {
        return(
            <div>{this.state.activePieces}</div>
        )
    }

    renderOptions = () => {
        return (
            <ul>
                <li onClick={this.handleShift} className={this.state.currentMove === 'shift' ? "active-move" : null}>Shift</li>
                <li onClick={this.handleReverse}>Reverse</li>
                <li onClick={this.handleSwap} className={this.state.currentMove === 'swap' ? "active-move" : null}>Swap</li>
                <li onClick={this.handleJump} className={this.state.currentMove === 'jump' ? "active-move" : null}>Jump</li>
            </ul>
        )
    }

    handleShift = () => {
        this.setState({
            currentMove: 'shift'
        })
    }

    shift = (input) => {
        const currentBoard = this.state.board 
        const changedBoard = currentBoard.map((el, i) => currentBoard[(i-input)%9])
        this.setState({
            board: changedBoard,
            activePieces: [],
            movesRemain: this.state.movesRemain - 1
        })
    }

    handleReverse = () => {
        const reversedBoard = this.state.board.reverse()
        this.setState({
            currentMove: 'reverse',
            board: reversedBoard,
            activePieces: [], 
            movesRemain: this.state.movesRemain - 1
        })
    }

    // refactor this. 
    handleSwap = () => {
        this.setState({
            currentMove: 'swap'
        })
    }

    swap = () => {
        let currentBoard = this.state.board
        const pieces = this.state.activePieces
        const a = pieces[0]
        const b = pieces[1]
        
        const c = currentBoard[a]
        currentBoard[a] = currentBoard[b]
        currentBoard[b] = c

        this.setState({
            board: currentBoard, 
            activePieces: [], 
            movesRemain: this.state.movesRemain - 1,
            currentMove: 'none'
        })
    } 

    handleJump = () => {
        this.setState({
            currentMove: 'jump'
        })
    }

    jump = (index) => {
        let currentBoard = this.state.board
        let tempBoard = currentBoard.map(i => i)

        const chosenSpot = parseInt(index.slice(-1))

        const choices = this.state.activePieces
        let sortedChoices = choices.sort().reverse()
        for (const n of sortedChoices){
            currentBoard.splice(n, 1)
        }
        
        sortedChoices = sortedChoices.reverse().map(i => tempBoard[i])            
        currentBoard.splice(chosenSpot, 0, sortedChoices)

        this.setState({
            board: currentBoard.flat(),
            activePieces: [], 
            movesRemain: this.state.movesRemain - 1,
            currentMove: 'none'
        })
    }

    displayDirections = () => {
        this.setState({
            view: 'directions',
            status: 'inactive'
        })
    }

    resetGame = () => {
        this.setState({
            view: 'game'
        })
    }

    render() {
        if (this.state.view === 'game'){
            return (
            <div className="inscrutable-space">
                <span className="remaining-moves">Remaining Moves: {this.state.movesRemain}</span>
                <div className="inscrutable-board">
                    {this.state.currentMove === 'shift' ? <ArrowL shift={this.shift}/> : null}
                    {this.renderTiles()}
                    {this.state.currentMove === 'shift' ? <ArrowR shift={this.shift}/> : null}
                </div>
                    {this.state.currentMove === 'swap' && this.state.activePieces.length === 2
                        ? <ThumbsUp confirmMove={this.swap}/>
                        : null}
                    {this.renderOptions()}
                    {this.renderActiveTiles()}
            </div>
            )
        } else {
            return(
                <div className="inscrutable-options">
                    <button onClick={this.displayDirections}> Directions </button>
                    <button style={{marginTop: '10px'}} onClick={this.resetGame}> Play </button>
                    {this.state.view === 'directions' ? <Directions /> : null}
                </div>
            )
        }
    }
}
