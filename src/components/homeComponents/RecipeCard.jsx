import "./RecipeCard.css"
import { Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }

    return(
        <div className="recipe-card">
            <div className="img-container">
                <img src={recipe.image_url} alt="" />
            </div>
            <h3>{recipe.recipe_name}</h3>
            <button className="blue-btn" onClick={handleClick}>see more</button>
        </div>
    )
}

export default RecipeCard