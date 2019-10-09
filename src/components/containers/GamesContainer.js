import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import TicTacToe from '../cards/TicTacToe'
// import Inscrutable from '../cards/Inscrutable'
import ReactIcon from '../cards/icons/ReactIcon'
import Ruby from '../cards/icons/Ruby'

export default function GamesContainer() {
    return (
        <div className="games-container">
            <Router>
                <div className="game-header-icons">
                    <Ruby />
                    <ReactIcon />
                </div>
                <p>CLI Games Converted From Ruby Into React</p>
                <span className="game-header"><NavLink to="/games/tictactoe">Tic-Tac-Toe</NavLink></span>
                {/* <span className="game-header"><NavLink to="/games/inscrutable">Inscrutable</NavLink></span> */}

                <Route exact path="/games/tictactoe" component={TicTacToe}/>
                {/* <Route exact path="/games/inscrutable" component={Inscrutable}/> */}
            </Router>
        </div>
    )
}
