import "./RecipeCard.css"

const RecipeCard = () => {

    return(
        <div className="recipe-card">
            <div className="img-container">
                <img src="https://assets.bonappetit.com/photos/57aceacc1b3340441497532d/master/pass/double-rl-ranch-burger.jpg" alt="" />
            </div>
            <h3>Burger</h3>
            <button className="blue-btn">see more</button>
        </div>
    )
}

export default RecipeCard