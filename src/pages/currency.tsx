import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function currency() {
  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1 style={{ textAlign: "center" }}>Currency</h1>
      <div style={div2}>
        <input type="number" value={0} />

        <select name="" id="">
          <option value="">USD</option>
          <option value="">EUR</option>
          <option value="">GBP</option>
          <option value="">IDR</option>
        </select>

        <button style={button}>Convert</button>
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
  cursor: "pointer",
};

//   const [amount, setAmount] = useState(0);
//   const [selectedCurrency, setSelectedCurrency] = useState('IDR');
//   const [result, setResult] = useState(0);

//   const exchangeRate = 15000;

//   const handleAmountChange = (event:any) => {
//     setAmount(event.target.value);
//   };

//   const handleCurrencyChange = (event:any) => {
//     setSelectedCurrency(event.target.value);
//   };

//   const handleConvert = () => {
//     // Perform the currency conversion
//     const convertedAmount = amount * exchangeRate;
//     setResult(convertedAmount);
//   };

//   return (
//     <div>
//       <Link to="/">
//         <button>Back</button>
//       </Link>
//       <h1 style={{ textAlign: 'center' }}>Currency</h1>
//       <div style={div2}>
//         <input
//           type="number"
//           value={amount}
//           onChange={handleAmountChange}
//         />
//         <select name="" id="" onChange={handleCurrencyChange} value={selectedCurrency}>
//           <option value="USD">USD</option>
//           <option value="EUR">EUR</option>
//           <option value="GBP">GBP</option>
//           <option value="IDR">IDR</option>
//         </select>
//         <button style={button} onClick={handleConvert}>
//           Convert
//         </button>
//         <p>Result: {result} {selectedCurrency}</p>
//       </div>
//     </div>
//   );
