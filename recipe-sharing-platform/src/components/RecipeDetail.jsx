import { useState , useEffect } from "react";

const RecipeDetail = ({ match }) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const recipeId = match.params.id;
    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch("./data.json");
                const data = await response.json();
                const foundRecipe = data.recipes.find(r => r.id === parseInt(recipeId));
                setRecipe(foundRecipe);
            } catch (error) {
                console.error("Error fetching recipe:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    } , [recipeId]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!recipe) {
        return <div>Recipe not found</div>;
    }
    return (
        <div className="container mx-auto p-4 bg-gray-400">
            <h1>{recipe.summary}</h1>
            <p>{recipe.image}</p>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
}

export default RecipeDetail;
