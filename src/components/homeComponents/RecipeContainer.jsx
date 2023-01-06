import "./RecipeContainer.css"
import RecipeCard from "./RecipeCard"
import { BiSearchAlt2 } from "react-icons/bi"
import {useState} from "react"

const RecipeContainer = ({recipes}) => {
    const [search, setSearch] = useState("")

    const recipeDisplay = recipes
        .filter((recipe, index) => {
            let title = recipe.recipe_name.toLowerCase()
            let searchParams = search.toLowerCase()
            return title.includes(searchParams)
        })
        .map((recipe, index) => {
            return <RecipeCard recipe={recipe}/>
        })

    return(
        <section className="recipe-section">
            <span className="search-bar">
                <BiSearchAlt2 size="2em" color="#FF7F50"/>
                <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search for a recipe"/>
            </span>
            <div className="recipe-container">
            {recipeDisplay ? recipeDisplay : <h2>No Recipe found lol</h2>}
            </div>
        </section>
    )
}

export default RecipeContainer