import React from "react";
import { Link } from "react-router-dom";

export default function mainPage() {
  return (
    <>
      <div style={div1}>
        <h1 style={{ textAlign: "center" }}>Challange on Task</h1>
        <div style={div2}>
          <h1>Count duration</h1>
          <Link to="/date">
            <button style={button}>Go to</button>
          </Link>
        </div>
      <div style={div2}>
        <h1>Currency Convert(not done yet)</h1>
        <Link to="/currency">
          <button style={button}>Go to</button>
        </Link>
      </div>
      <div style={div2}>
        <h1>Calculator Gaji</h1>
        <Link to="/gaji">
          <button style={button}>Go to</button>
        </Link>
      </div>
      <div style={div2}>
        <h1>Acak Kata</h1>
        <Link to="/word">
          <button style={button}>Go to</button>
        </Link>
      </div>
      </div>
    </>
  );
}

const div1: React.CSSProperties = {
  width: "80%",
  margin: "auto",
  border: "solid blue 2px",
};

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
  cursor: "pointer",
};
