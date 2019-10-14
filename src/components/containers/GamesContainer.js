import React from 'react'
import TicTacToe from '../cards/TicTacToe'
import Inscrutable from '../cards/Inscrutable'
import ReactIcon from '../cards/icons/ReactIcon'
import Ruby from '../cards/icons/Ruby'

export default class GamesContainer extends React.Component{

    state = {
        game: 'none'
    }

    showTTT = () => {
        this.setState({
            game: 'tic-tac-toe'
        })
    }
    
    showInscrutable = () => {
        this.setState({
            game: 'inscrutable'
        })
    }

    renderGame = () => {
        if (this.state.game === 'tic-tac-toe'){
            return <TicTacToe />
        } else if (this.state.game === 'inscrutable'){
            return <Inscrutable />
        }
    }

    render(){
        return (
            <div className="games-container">
                    <div className="game-header-icons">
                        <Ruby />
                        <ReactIcon />
                    </div>
                    <p>CLI Games Converted From Ruby Into React</p>

                    <button onClick={this.showTTT} 
                            style={this.state.game === 'tic-tac-toe' 
                                ? {borderColor: 'white', margin: '10px'} 
                                : {margin: '10px'}} 
                            className="game-header">Tic-Tac-Toe
                    </button>

                    <button onClick={this.showInscrutable} 
                            style={this.state.game === 'inscrutable' 
                                ? {borderColor: 'white', margin: '10px'} 
                                : {margin: '10px'}} 
                            className="game-header">Inscrutable
                    </button>
                    
                    {this.renderGame()}
            </div>
        )
    }
}
