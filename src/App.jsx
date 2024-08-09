import "./App.css";
import { useState } from "react";
import dice1 from "./assets/dice1.png";
import dice2 from "./assets/dice2.png";
import dice3 from "./assets/dice3.png";
import dice4 from "./assets/dice4.png";
import dice5 from "./assets/dice5.png";
import dice6 from "./assets/dice6.png";

function App() {
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [text, setText] = useState("Roll the Dice🎲🎲🎲");
  const [diceImg1, setDiceImg1] = useState(dice1);
  const [diceImg2, setDiceImg2] = useState(dice2);
  function handleChnage() {
    var randomNumber1 = Math.floor(Math.random() * 6);
    var randomNumber2 = Math.floor(Math.random() * 6);
    setDiceImg1(diceArr[randomNumber1]);
    setDiceImg2(diceArr[randomNumber2]);
    if (diceArr[randomNumber1] > diceArr[randomNumber2]) {
      const newText = "Player 1 wins 🚩🚩🚩";
      setText(newText);
    } else if (diceArr[randomNumber1] === diceArr[randomNumber2]) {
      const newText = "It's a Draw 😵‍💫";
      setText(newText);
    } else {
      const newText = "Player 2 wins 🚩🚩🚩";
      setText(newText);
    }
  }
  return (
    <div>
      <h1 className="heading">{text}</h1>
      <div className="dices">
        <img className="dice1" src={diceImg1} alt="" />
        <img className="dice2" src={diceImg2} alt="" />
      </div>
      <button className="roll_button" onClick={handleChnage}>
        ROLL
      </button>
    </div>
  );
}

export default App;
