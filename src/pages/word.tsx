import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const wordsList = ["apple", "banana", "orange", "grape", "strawberry"];

const shuffleWord = (word: any) => {
  const shuffledWord = word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return shuffledWord;
};

const Word = () => {
  const [word, setWord] = useState("");
  const [shuffledWord, setShuffledWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(Boolean);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateRandomWord();
    score;
  }, []);

  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    const selectedWord = wordsList[randomIndex];
    setWord(selectedWord);
    setShuffledWord(shuffleWord(selectedWord));
  };

  const handleInputChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userGuess = userInput.toLowerCase();

    if (userGuess === word) {
      setIsCorrect(true);
      setScore((score) => score + 1);
    } else {
      alert("wrong");
      setIsCorrect(false);
    }

    setUserInput("");
    setTimeout(() => {
      generateRandomWord();
    }, 500);
  };

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1 style={{ textAlign: "center" }}>Word Scramble Game</h1>
      <div style={div2}>
        <h2>Skor: {score} </h2>
        <p>kata ter acak: {shuffledWord}</p>
        <form onSubmit={handleSubmit}>
          <input type="text" value={userInput} onChange={handleInputChange} />
          <button style={button} type="submit">
            Cek jawaban
          </button>
        </form>
        <p>{isCorrect && "Correct!."}</p>
      </div>
    </div>
  );
};

export default Word;

const button: React.CSSProperties = {
  padding: "5px",
  fontSize: "15px",
  color: "white",
  fontWeight: "bold",
  backgroundColor: "blue",
  cursor: "pointer",
  borderRadius: "5px",
  marginLeft: "10px",
};

const div2: React.CSSProperties = {
  width: "80%",
  border: "1px solid",
  paddingLeft: "10px",
  paddingBottom: "20px",
  margin: "auto",
  marginBottom: "20px",
};
