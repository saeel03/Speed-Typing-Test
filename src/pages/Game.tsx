import React, { useEffect, useState, type ChangeEvent } from "react";
import { useTypingStore } from "../store/useTypingStore";
import { useNavigate } from "react-router-dom";

//const TEXT: string ='The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks. Obsidian from Anatolia, lapis lazuli from Afghanistan, and amber from the Baltic—all discovered in a single Mycenaean tomb—suggested commercial connections far more extensive than previously hypothesized. "We\'ve underestimated ancient peoples\' navigational capabilities and their appetite for luxury goods," the lead researcher observed. "Globalization isn\'t as modern as we assume."';
const TEXT: string = "the Quick Brown fox Jumps Over the Lazy Dog"

const Game = () => {
  const [inputText, setinputText] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [time, settime] = useState<number>(0);
  const [started, setstarted] = useState<boolean>(false);

  const { setWpm, setAccuracy, setTime, reset } = useTypingStore();





  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= TEXT.length) {
      setinputText(value);
    }

    if (!started && value.length == 1) {
      setstarted(true);
    }

   
  const correctCount = value
    .split("")
    .filter((char, index) => char === TEXT[index]).length;

  const newAccuracy =
    value.length === 0
      ? 0
      : Math.round((correctCount / value.length) * 100);

  const minutes = time / 60;
  const newWpm =
    minutes > 0 ? Math.round(value.length / 5 / minutes) : 0;

  setAccuracy(newAccuracy);
  setWpm(newWpm);

    if (value.length === TEXT.length) {
      setGameOver(true);
       navigate("/completed");
    }
  };

  const resetGame = () => {
    setinputText("");
    setGameOver(false);
    setstarted(false);
    settime(0);
    reset();
  };

  const getCharClass = (char: string, index: number) => {
    if (!inputText[index]) return "";
    if (char === inputText[index]) {
      return "correct";
    } else {
      return "incorrect";
    }
  };


useEffect(() => {
  let interval: ReturnType<typeof setInterval>;

  if (started && !gameOver) {
    interval = setInterval(() => {
      settime(prev => {
        const newTime = prev + 1;
        setTime(newTime); 
        return newTime;
      });
    }, 1000);
  }

  return () => clearInterval(interval);
}, [started, gameOver]);


  return (
    <>
      <div style={{}}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "20px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {TEXT.split("").map((char: string, index: number) => (
            <span key={index} className={`char ${getCharClass(char, index)}`}>
              {char}
            </span>
          ))}
        </div>

        <input value={inputText} onChange={handleChange} disabled={gameOver} />
        <br />
        <br />

        <div>
          {started && !gameOver && (
            <>
              <button onClick={resetGame}> Reset</button>
            </>
          )}
        </div>
        {/* 
        <div>
          
          { 
            gameOver &&(
              <>
                  
                  <button onClick={resetGame}> Play Again</button>
                  <div className="results">
    <p>Time: {time}s</p>
    <p>WPM: {wpm}</p>
    <p>Accuracy: {accuracy}%</p>
  </div>
              </>
            )
          }
        </div> */}
      </div>
    </>
  );
};

export default Game;
