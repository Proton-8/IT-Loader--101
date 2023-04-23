import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function ApiResults() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios
      .get("https://gapi-staging.iceturtlestudios.com/games.php ")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(" https://gapi-staging.iceturtlestudios.com/levels.php?gameid=1")
      .then((response) => setData2(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {" "}
      <br></br>
      <h2>Rigo's API Results:</h2>
      <ul>
        <br></br>
        {data.map((item) => (
          <li key={item.id}>
            ID = {item.id}
            <p>Name = {item.name}</p>
            {item.image ? (
              <img src={item.image} alt={item.title} />
            ) : (
              <p>
                No image available but we have this ....{" "}
                <img
                  src="https://www.iceturtlestudios.com/wp-content/uploads/2022/07/logo512x512-e1656703794928.png"
                  alt={item.title}
                  className="logo"
                ></img>{" "}
              </p>
            )}
            <p>
              {item.description ? (
                <img src={item.description} alt={item.title} />
              ) : (
                <p>
                  No description available but we have this ...{" "}
                  <img
                    src=" https://gateway.ipfscdn.io/ipfs/QmQzGqJVjMLDg6mwh4Jux4jRiMhXmu5mrV2rwmejmxiZSa/9.png "
                    alt={item.title}
                    className="logo"
                  ></img>
                </p>
              )}
            </p>
            <p>Owner is: {item.owner}</p>
            <br></br>{" "}
          </li>
        ))}

        {data2.map((item) => (
          <li key={item.id}>
            <p>GAME LEVELS </p>
            ID = {item.id}
            <p>GameID = {item.gameid}</p>
            <p>Name = {item.name}</p>
            <br></br>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      {" "}
      <img src="https://www.iceturtlestudios.com/wp-content/uploads/2022/07/logo512x512-e1656703794928.png"></img>
      <h1>Ice Turtle Time !!! </h1>
      <ApiResults />
    </div>
  );
}

export default App;
