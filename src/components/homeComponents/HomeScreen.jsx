import React, {useState, useEffect} from 'react'
import AdBanner from './AdBanner'
import RecipeContainer from './RecipeContainer'

import axios from 'axios'

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes")
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes={recipes}/>
    </div>
  )
}

export default HomeScreen