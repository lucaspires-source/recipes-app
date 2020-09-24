import React,{useEffect, useState}  from 'react';
import Recipe from "./Recipe.js"
import './App.css';

const App = () =>{


  const APP_ID = "e6a7fc99";
  const APP_KEY = "f516d2f52bc9650b5cdf80bdc496e1ba	";



  const [recipes, setRecipes] = useState([])



  useEffect ( ()=>{
    getRecipes()
  },[])


  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
  }
  return(
      <div className="App">
        <form className="search-form">
          <input className="search-bar" type="text"/>
          <button  className="search-button" type="submit">
            Search
          </button>
        </form>
        {recipes.map(recipe =>(
          <Recipe 
          title={recipe.recipe.label} 
          calories={Math.round(recipe.recipe.calories)} 
          image={recipe.recipe.image}
          />
        ))}
      </div>
  )
}

export default App;
