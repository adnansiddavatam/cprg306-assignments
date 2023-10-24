import React, { useState, useEffect } from 'react';

function fetchMealIdeas(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => response.json())
        .then(data => data.meals || [])  // ensure we always return an array
        .catch(error => {
            console.error('Error fetching meals:', error);
            return [];  // return an empty array in case of an error
        });
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient).then(data => setMeals(data));
        }
    }, [ingredient]);

    return (
        <div>
            <header>Meal Ideas for {ingredient}</header>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} width={50} height={50}/>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MealIdeas;
