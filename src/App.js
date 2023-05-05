import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { motion } from "framer-motion";
// import GameList from "./GameList";
import Background from "./Background";
import { Navbar } from "./components/Navbar";
import { GameList } from "./components/GameList";
import { ApiResults } from "./components/ApiResults";
import { ApiResults2 } from "./components/ApiResults2";
import { Spinner } from "./components/SpinBox";

const BASE_URL = "https://api.rawg.io/api";

async function getGames() {
  try {
    const response = await axios.get(`${BASE_URL}/games`);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

function AnimatedBackground() {
  return (
    <motion.div
      className="animated-bg"
      animate={{ scale: [1, 1.5, 1.2, 1] }}
      transition={{ duration: 20, repeat: Infinity }}
    />
  );
}

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <div className="App">
      {/* <Spinner /> */}
      <Navbar />
      <Background />{" "}
      <img src="https://www.iceturtlestudios.com/wp-content/uploads/2022/07/logo512x512-e1656703794928.png"></img>
      <h1>Ice Turtle Time !!! </h1>
      <ApiResults2 />
      <ApiResults />
    </div>
  );
}

export default App;

// function App() {

//   return (
//     <div className="App">
//       {/*...*/}
//     </div>
//   );
// }
