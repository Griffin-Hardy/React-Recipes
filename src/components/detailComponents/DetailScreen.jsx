import React from 'react'
import "./Detailscreen.css"
import DetailBanner from "./DetailBanner"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

const DetailScreen = () => {  
  const {id} = useParams()

  const [recipe, setRecipe] = useState({})
  const url = "https://recipes.devmountain.com"

  useEffect(() => {
      axios.get(`${url}/recipes/${id}`)
        .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => {
          console.log(err)
      })
    }, []);

  return (
    <section>
     <DetailBanner image={recipe.image_url} title={recipe.recipe_name}/>
     <div className="details-container">
      <div className="ingredients-container">
      <h2>Recipe</h2>
            <h4>Prep Time: {recipe.prep_time}</h4>
            <h4>Cook Time: {recipe.cook_time}</h4>
            <h4>Serves: {recipe.serves}</h4>
            <br/>
            <h2>Ingredients</h2>
              {recipe.ingredients && recipe.ingredients.map((ing, index) => {
                return <h4>{ing.quantity} {ing.ingredient}</h4>
              })}
      </div>
      <div className="instructions-container">
        <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
              {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
      </div>
     </div>
    </section>
  );
};

export default DetailScreen;
