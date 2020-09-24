import React,{useEffect, useState}  from 'react';
import Recipe from "./Recipe.js"
import './App.css';

const App = () =>{


  const APP_ID = "e6a7fc99";
  const APP_KEY = "f516d2f52bc9650b5cdf80bdc496e1ba	";



  const [recipes, setRecipes] = useState([])
  const[search, SetSearch] = useState("")
  const[query, setQuery] = useState("chicken")


  useEffect ( ()=>{
    getRecipes()
  },[query])


  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
  }

  const updateSearch = e =>{
    SetSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault()
    setQuery (search)
    SetSearch("")
  }

  return(
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
          <button  className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={Math.round(recipe.recipe.calories) + " cal"} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
        </div>
      </div>
  )
}

export default App;
