import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import useLoader from './hooks/useLoader';
import Menu from './components/Menu'
import './App.css';

const App = () => {

  const APP_ID = '37ef7ce2';
  const APP_KEY = '6330f5544a13aac18c7430f3641bc638';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const [loader, showLoader, hideLoader] = useLoader();

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    showLoader();
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    hideLoader();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
      setSearch(e.target.value);
    }
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <Menu search={search} getSearch={getSearch} updateSearch={updateSearch}/>
      {recipes.map((recipe, index) => (
        <Recipe 
          key={index}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories.toFixed()}
          digest={recipe.recipe.digest}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      {/* {loader} */}
    </div>
  );
}

export default App;
