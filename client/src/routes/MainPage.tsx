import React, { useState } from "react";
import './Game.css';
import { TPlayers } from "../modules/Server/types";

const MainPage = () => {
    const [counter, setCounter] = useState<number>(0);
    const [players, setPlayers] = useState<TPlayers>([
        { name: 'Dimon', score: 101 },
        { name: 'Ne Dimon', score: 21 },
    ])

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="game-content">
            {/* <h1>Main</h1> */}
            <div>
                <p>Count: {counter}</p>
                <button className="clickerBtn" onClick={() => handleClick()} />
            </div>
            <div className="game-top-list">
                <h2>Топ-лист игроков:</h2>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </div>
        </div>
    )
}

export default MainPage;