
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "./SpinBox";
export const ApiResults2 = () =>  {

  const [data2, setData2] = useState([]);
 

  useEffect(() => {
    axios
      .get(" https://gapi-staging.iceturtlestudios.com/levels.php?gameid=1")
      .then((response) => setData2(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
          <Spinner />
      {" "}
      <br></br>

<h1> OK  NOW this is the GAME LEVELS -------------------------</h1>
        

        {data2.map((item) => (
          
          <li key={item.id}><br></br>
            
            ID = {item.id}
            <p>THE GameID = {item.gameid}</p> {item.image ? (
              <img src={item.image} alt={item.title} />
            ) : (
              <p>
                No image  but we have this ....{" "}
                <img
                  src=" https://gateway.ipfscdn.io/ipfs/QmQzGqJVjMLDg6mwh4Jux4jRiMhXmu5mrV2rwmejmxiZSa/9.png"
                  alt={item.title}
                  className="logo2"
                ></img>{" "}
              </p>
            )}

            <p>THE Name = {item.name}</p>
            <br></br>{" "}
          </li>
        ))}
   
    </div>
  );
}