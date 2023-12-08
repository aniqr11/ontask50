import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Countdown() {
  const [inputDate, setInputDate] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [result, setResult] = useState('');
  const [start, setStart] = useState(true);

  useEffect(() => {
    let interval: any;

    if (!start) {
      interval = setInterval(() => {
        const inputDateObject = new Date(inputDate);
        const now = new Date();
        const difference = inputDateObject.getTime() - now.getTime();

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);

        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s);

        setResult(`${d} days, ${h} hours, ${m} minutes, ${s} seconds`);

        if(difference <= 0) {
            setResult("Waktu telah habis")

        }
      }, 1000);

    }
    
    return () => clearInterval(interval);
}, [inputDate, start]);


function onCount() {
    setStart(false)
    
    if(inputDate == "" ){
      alert("masukan data dahulu")
      setStart(true)
      setResult("sedang menghitung...")
    }
}

  function reset() {
    setInputDate("");
    setStart(true);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setResult('');
  }

  return (
    <div>
      <Link to="/"><button>Back</button></Link>
      <h1 style={{ textAlign: "center" }}>Countdown time</h1>
      <div style={div2}>
        <p>Enter the Target Date and Time:</p>
        <input
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
          type="datetime-local"
        />

        {start ? (
          <button onClick={onCount} style={button}>
            Start
          </button>
        ) : (
          <button onClick={reset}>Reset</button>
        )}

        <p>Countdown:</p>

        <p>
          {result}
        </p>

        <p style={{display:"none"}}>{days},{hours} {minutes},{seconds}</p>
      </div>
    </div>
  );
}

const div2: React.CSSProperties = {
  width: "80%",
  border: "1px solid",
  paddingLeft: "10px",
  paddingBottom: "20px",
  margin: "auto",
  marginBottom: "20px",
};

const button: React.CSSProperties = {
  padding: "5px",
  fontSize: "15px",
  color: "white",
  fontWeight: "bold",
  backgroundColor: "blue",
};
