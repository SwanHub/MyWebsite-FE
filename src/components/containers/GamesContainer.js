import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import TicTacToe from '../cards/TicTacToe'
import Inscrutable from '../cards/Inscrutable'

export default function GamesContainer() {
    return (
        <div className="games-container">
            <Router>
                <h1> Welcome to the Games Corner! </h1>
                <span className="game-header"><NavLink to="/games/tictactoe">Tic-Tac-Toe</NavLink></span>
                <span className="game-header"><NavLink to="/games/inscrutable">Inscrutable</NavLink></span>

                <Route exact path="/games/tictactoe" component={TicTacToe}/>
                <Route exact path="/games/inscrutable" component={Inscrutable}/>
            </Router>
        </div>
    )
}
