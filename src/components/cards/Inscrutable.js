import React, { Component } from 'react'
import Piece from './Piece'

export default class Inscrutable extends Component {

    state = {
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        activePieces: [],
        movesRemain: 4,
        result: 'ongoing'
    }

    setActivePieces = (id) => {
        const newSet = this.state.activePieces 
        newSet.push(id)

        this.setState({
            activePieces: newSet
        })
    }

    renderTiles = () => {
        let board = []
        for (let i = 0; i < 9; i++){
            board.push(<Piece 
                        i={i} 
                        board={this.state.board} 
                        setActivePieces={this.setActivePieces}
                        key={i}    
                        />)
        }
        return board
    }

    renderActiveTiles = () => {
        return(
            <div>{this.state.activePieces}</div>
        )
    }

    renderOptions = () => {
        return (
            <ul>
                <li onClick={this.handleShift}>Shift</li>
                <li onClick={this.handleReverse}>Reverse</li>
                <li onClick={this.handleSwap}>Swap</li>
                <li onClick={this.handleJump}>Jump</li>
            </ul>
        )
    }

    handleShift = () => {
        const currentBoard = this.state.board 
        const changedBoard = currentBoard.map((el, i) => currentBoard[(i+1)%9])
        this.setState({
            board: changedBoard,
            activePieces: []
        })
    }

    handleReverse = () => {
        const reversedBoard = this.state.board.reverse()
        this.setState({
            board: reversedBoard,
            activePieces: []
        })
    }

    // refactor this. 
    handleSwap = () => {
        let currentBoard = this.state.board
        const pieces = this.state.activePieces
        const a = pieces[0]
        const b = pieces[1]
        
        const c = currentBoard[a]
        currentBoard[a] = currentBoard[b]
        currentBoard[b] = c

        this.setState({
            board: currentBoard, 
            activePieces: []
        })
    }

    handleJump = () => {
        let currentBoard = this.state.board
        let tempBoard = currentBoard.map(i => i)

        const chosenSpot = 0
        const choices = this.state.activePieces
        let sortedChoices = choices.sort().reverse()
        for (const n of sortedChoices){
            currentBoard.splice(n, 1)
        }
        
        sortedChoices = sortedChoices.reverse().map(i => tempBoard[i])            
        currentBoard.splice(chosenSpot, 0, sortedChoices)

        this.setState({
            board: currentBoard.flat(),
            activePieces: []
        })
    }

    render() {
        return (
        <>
            <h3>Inscrutable - Logic Game</h3>
            Remaining Moves: {this.state.movesRemain}
            <div className="inscrutable-board">
                {this.renderTiles()}
            </div>
                {this.renderOptions()}
                {this.renderActiveTiles()}
        </>
        )
    }
}
