
import React, { useEffect,useState } from 'react'
import Navbar from "./componants/Navbar"
import Mycart from "./componants/Mycart"
import './App.css';
import {getMatches} from "./api/Api"

function App() {

 const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
    .then((data) => setMatches(data.matches))
    .catch();
  },[])

  return (
    <>
      <Navbar/>
        <h1 align="center"> This Is live score app</h1>

        {
          matches.map((match) => (
            <Mycart match={match}/>
          ))
        }
       
       
    </>
  );
}

export default App;
