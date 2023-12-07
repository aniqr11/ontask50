import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function gaji() {
  const [gajiPokok, setGajiPokok] = useState(0);
  const [kewajiban, setKewajiban] = useState(0);
  const [tunjangan, setTunjangan] = useState(0);
  const [resultKotor, setResultKotor] = useState(0);
  const [resultBersih, setResultBersih] = useState(0);

  useEffect(() => {
    gajiPokok;
  }, []);

  function resultGaji() {
    setResultKotor(gajiPokok + tunjangan);
    setResultBersih(resultKotor - kewajiban);
  }

  return (
    <div>
      <div>
        <Link to="/">
          <button>Back</button>
        </Link>
        <h1 style={{ textAlign: "center" }}>Calculator gaji</h1>
        <div style={div2}>
          <p>Gaji pokok</p>

          <input
            value={gajiPokok}
            onChange={(e) => setGajiPokok(parseInt(e.target.value, 10))}
            type="number"
          />
          <p>Tunjangan</p>

          <input
            value={tunjangan}
            onChange={(e) => setTunjangan(parseInt(e.target.value, 10))}
            type="number"
          />
          <p>kewajiban</p>

          <input
            value={kewajiban}
            onChange={(e) => setKewajiban(parseInt(e.target.value, 10))}
            type="number"
          />
          <button onClick={resultGaji} style={button}>
            start
          </button>
          <div>
            <h1>hasil:</h1>
            <p>Gaji Kotor: Rp.{resultKotor}</p>
            <p>Gaji pokok: Rp.{gajiPokok}</p>
            <p>Gaji bersih: Rp.{resultBersih}</p>
          </div>
        </div>
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
