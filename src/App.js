import React,{useEffect, useState}  from 'react';

import './App.css';

const App = () =>{


  const APP_ID = "e6a7fc99";
  const APP_KEY = "f516d2f52bc9650b5cdf80bdc496e1ba	";


  const exempleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  const [counter, setCounter] = useState(0)

  useEffect (()=>{
    console.log("o pai ta on")
  })
  return(
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button onClick={()=> setCounter(counter + 1 )} className="search-button" type="submit">
            {counter}
          </button>
        </form>
      </div>
  )
}

export default App;
