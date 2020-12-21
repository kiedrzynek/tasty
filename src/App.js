import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '37ef7ce2';
  const APP_KEY = '6330f5544a13aac18c7430f3641bc638';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe/>
      ))}
    </div>
  );
}

export default App;
