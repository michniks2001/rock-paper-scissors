import { useState } from "react";
import "./App.css"

const App = () => {
    const CPU_CHOICES = [
        "Rock",
        "Paper",
        "Scissors"
    ]

    const [userPoints, setUserPoints] = useState(0);
    const [cpuPoints, setCpuPoints] = useState(0);
    const [userResult, setUserResult] = useState("");
    const [cpuResult, setCpuResult] = useState("");


    const choose = () => {
        let choice = Math.floor(Math.random() * CPU_CHOICES.length)
        return CPU_CHOICES[choice]
    }

    const handleClick = (userChoice) => {
            let cpuChoice = choose()

            if (userChoice === "Rock") {
                if (cpuChoice === "Scissors") {
                    setUserPoints(prevPoints => prevPoints + 1)
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                } else if (cpuChoice === "Paper") {
                    setCpuPoints(prevPoints => prevPoints + 1)
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                } else {
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                }
            } else if (userChoice === "Paper") {
                if (cpuChoice === "Scissors") {
                    setCpuPoints(prevPoints => prevPoints + 1)
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                } else if (cpuChoice === "Rock") {
                    setUserPoints(prevPoints => prevPoints + 1)
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                } else {
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                }
            } else {
                if (cpuChoice === "Rock") {
                    setCpuPoints(prevPoints => prevPoints + 1)
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                } else if (cpuChoice === "Paper") {
                    setUserPoints(prevPoints => prevPoints + 1)
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                } else {
                    setUserResult(`Your choice: ${userChoice}`)
                    setCpuResult(`CPU chose: ${cpuChoice}`)
                }
            }
    }

    return (
        <div className="container">
            <h1 className="title">
                Welcome to Rock, Paper, Scissors
            </h1>
            <div className="game-container">
                <button className="choice-button" onClick={() => handleClick("Rock")}>
                    Rock
                </button>
                <button className="choice-button" onClick={() => handleClick("Paper")}>
                    Paper
                </button>
                <button className="choice-button" onClick={() => handleClick("Scissors")}>
                    Scissors
                </button>
            </div>
            <div className="result-container">
                <h2>
                    {userResult} <br />
                    {cpuResult}
                </h2>
            </div>
            <div className="points-container">
                <h3>
                User Points: {userPoints} <br />
                    CPU Points: {cpuPoints}
                </h3>
            </div>
            <button className="reset-button" onClick={() => { setUserPoints(0); setCpuPoints(0); }}>
                Reset Scores
            </button>
        </div>
    )
}

export default App;