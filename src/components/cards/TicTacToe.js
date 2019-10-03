import React, { Component } from 'react'

export default class TicTacToe extends Component {
    state = {
        currentBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " ",],
        availablePositions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        winningCombinations: [
                                [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
                                [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
                            ],
        gameStatus: 'inactive'
    }

    handleTileClick = (event) => {
        const id = parseInt(event.target.id.slice(-1))
        if (this.state.currentBoard[id] == " "){
            this.updateNewMove(id, "X")
            if (this.state.availablePositions.length > 0){
                setTimeout(() => this.cpuResponse(), 1)
            } 
        }
    }

    updateNewMove = (id, input) => {
        const currentBoard = this.updateBoard(id, input)
        const availablePositions = this.updatePositions(id)
        const winningCombinations = this.updateWinCombos(id, input)
        const gameStatus = this.checkForVictor(availablePositions, winningCombinations)

        this.setState({
            currentBoard: currentBoard,
            availablePositions: availablePositions, 
            winningCombinations: winningCombinations,
            gameStatus: gameStatus
        })
    }

    checkForVictor = (positions, combos) => {
        if (positions.length === 0){
            return 'tie'
        } else {
            let check = this.checkEachCombo(combos)
            if (check.includes('victory')){ return 'victory' } 
            else if (check.includes('defeat')){ return 'defeat' } 
            else { return 'ongoing' }
        }
    }

    checkEachCombo = (combos) => {
        return combos.map(arr => {
            let xCount = 0
            let oCount = 0
            for (const i of arr){
                if (i === "X"){ xCount++ } 
                else if (i === "O"){ oCount++ }
            }
            if (xCount === 3){ return 'victory' } 
            else if (oCount === 3){ return 'defeat' } 
            else { return 'ongoing' }
        })
    }

    updateWinCombos = (id, input) => {
        let winningCombinations = this.state.winningCombinations 
        return winningCombinations.map(comboArray => {
            if (comboArray.includes(id)){
                let idIndex = comboArray.indexOf(id) // get the id's index, use splice 
                comboArray.splice(idIndex, 1, input)
                return comboArray
            } else {
                return comboArray
            }
        })
    }

    updatePositions = (id) => {
        let availablePositions = this.state.availablePositions 
        return availablePositions.filter(pos => {
            return pos !== id
        })
    }

    updateBoard = (id, input) => {
        let currentBoard = this.state.currentBoard 
        currentBoard[id] = input 
        return currentBoard
    }

    renderTiles = () => {
        let board = []
        for (let i = 0; i < 9; i++){
            board.push(<div id={`tile-${i}`} 
                        className="ttt-tile" 
                        key={i+1}
                        onClick={this.state.gameStatus === 'ongoing' ? this.handleTileClick : null}
                        >{this.state.currentBoard[i]}</div>)
        }
        return board
    }

    cpuResponse = () => {
        let board = this.state.currentBoard
        let positions = this.state.availablePositions

        if (positions.length === 1){
            board[positions[0]] = "O"
            this.setState({ currentBoard: board })
            // update_winning_combinations_cpu(winning_combinations, available_positions[0])
            // available_positions.delete(available_positions[0])
        } else {
            this.cpuLogic(positions)
        }
    }

    cpuLogic = (positions) => {
        let combos = this.state.winningCombinations

        // for each available position, choose the piece with highest chances of winning.  
        const positionScores = this.getAllScores(positions, combos)
        const max = Math.max(...positionScores)
        const winningIndexes = this.getWinningIndexes(positionScores, max, positions)
        const randomIndex = Math.floor(Math.random()*winningIndexes.length)
        const chosenPieceIndex = winningIndexes[randomIndex]
        this.updateNewMove(chosenPieceIndex, 'O')
    }

    getWinningIndexes = (positionScores, max, positions) => {
        let winners = []
        positionScores.filter((el, i) => {
            if (el === max){
                winners.push(positions[i])
                return el === max
            }
        })
        return winners
    }

    getAllScores = (positions, combos) => {
        return positions.map(position => {
            let comboSim = combos.map(comboArray => {
                return comboArray.map(el => {
                    return el === position ? el = "O" : el 
                })
            })
            let gamerScore = this.getScore(comboSim, "X", "O")
            let cpuScore = this.getScore(comboSim, "O", "X")
            return cpuScore - gamerScore
        })
    }

    getScore = (comboSim, gamerInput, cpuInput) => {
        let score = 0
        for (const el of comboSim){
            if (el.includes(gamerInput) && el.includes(cpuInput)) {
                score += 0
            } else if (el.includes(gamerInput) && !el.includes(cpuInput)) {
                let count = 0
                for (const i of el){ if (i === gamerInput){ count++ }}
                if (count === 1){ score += 2 } 
                else if (count ===2){ score += 10 } 
                else if (count === 3){ score += 100 }
            }
        }    
        return score
    }

    startGame = () => {
        this.setState({
            gameStatus: 'ongoing'
        })
    }

    resetGame = () => {
        this.setState({
            currentBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " ",],
            availablePositions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            winningCombinations: [
                                [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
                                [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
                            ],
            gameStatus: 'ongoing'
        })
    }

    handleGameOver = () => {
        return (
            <button onClick={this.resetGame}>Again?</button>
        )
    }

    render() {
        return (
            <div className="game-space">
                <div className="gameStatus">{this.state.gameStatus != 'inactive'
                                                ? this.state.gameStatus.toUpperCase()
                                                : null}</div>
                {this.state.gameStatus == 'inactive' ? <button onClick={this.startGame}> Play Game </button> : null}
                {this.state.gameStatus !== 'ongoing' || this.state.gameStatus === 'inactive' 
                        ? this.handleGameOver() 
                        : null }
                <div className="ttt-board">
                    {this.state.gameStatus != 'inactive' ? this.renderTiles() : null}
                </div>
            </div>
        )
    }
}
