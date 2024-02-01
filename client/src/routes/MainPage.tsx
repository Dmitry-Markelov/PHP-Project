import React, { useContext, useEffect, useState } from "react";
import './Game.css';
import { TPlayer, TPlayers } from "../modules/Server/types";
import { ServerContext } from "../App";

const MainPage = () => {
    const server = useContext(ServerContext);

    const [player, setPlayer] = useState<TPlayer | null>(null);

    const [counter, setCounter] = useState<number>(0);
    const [players, setPlayers] = useState<TPlayers>([])

    const handleClick = () => {
        if (player && player.factor) {
            setCounter(counter + player.factor);
        }
    }

    const getScene = async () => {
        const result = await server.getScene();
        
        if (result?.player && counter == 0) {
            setPlayer(result.player);
            setCounter(result.player.score);
        }
        if (result?.players) {
            setPlayers(result?.players);
        }
    }

    const sendMyScore = (score: number) => {
        return server.sendMyCounter(score);
    }

    useEffect(() => {
        getScene();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter !== 0) {
                sendMyScore(counter);
            }
            getScene();
        }, 2500);

        return () => {
            clearInterval(interval);
        }
    }, [counter])

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