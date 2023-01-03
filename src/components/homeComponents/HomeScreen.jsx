import React, {useState, useEffect} from 'react'
import AdBanner from './AdBanner'
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
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen