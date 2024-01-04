import React, { useContext, useEffect, useState } from "react";
import './Game.css';
import { TPlayers } from "../modules/Server/types";
import { ServerContext } from "../App";

const MainPage = () => {
    const server = useContext(ServerContext);

    const [counter, setCounter] = useState<number>(0);
    const [players, setPlayers] = useState<TPlayers>([])

    const handleClick = () => {
        setCounter(counter + 1)
    }

    const getScene = async () => {
        const result = await server.getScene();
        if (result?.myScore && counter == 0) {
            setCounter(result?.myScore);
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