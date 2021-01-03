import React, {useState} from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, digest, image, ingredients}) => {

    // const showNutrition = () => {
    //     const nutrition = document.getElementById('nutrition');
    //     nutrition.classList.toggle('show');
    // }


    const [open, setOpen] = useState(false);
    const showNutrition = () => setOpen(!open);


    return (
        <div className={style.recipe}>
            <div>
                <h1>{title}</h1>
                <p className={style.calories}>{calories} kcal</p>
                <img src={image} alt=""/>
                <ul className={style.ingredients}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ul>
            </div>
            <div>
                <button onClick={showNutrition}>{open ? 'Hide' : 'Show'} nutrition</button>
                <ul id="nutrition" className={`${style.digest} ${open ? style.open : style.hide}`}>
                    {digest.map((digest, index) => (
                        <li key={index}>
                            {digest.label}:&nbsp;
                            {digest.total.toFixed()} {digest.unit}
                        </li>  
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Recipe;