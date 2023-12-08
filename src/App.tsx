import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/main_page";
import CountDate from "./pages/count_date";
// import Currency from "./pages/currency";
import Gaji from "./pages/gaji";
import Word from "./pages/word";

function App() {

  return (
    <>
  <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/date" element={<CountDate/>}/>
    {/* <Route path="/currency" element={<Currency/>}/> */}
    <Route path="/gaji" element={<Gaji/>}/>
    <Route path="/word" element={<Word/>}/>
  </Routes>
    </>
  )
}

export default App
