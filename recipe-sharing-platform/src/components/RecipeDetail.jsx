import { useState , useEffect , useParams } from "react";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch("./data.json");
                const data = await response.json();
                const foundRecipe = data.recipes.find((r) => r.id === parseInt(id));
                if (foundRecipe) {
                    setRecipe(foundRecipe);
                } else {
                    setError("Recipe not found");
                }
            } catch (error) {
                setError("Error fetching recipe");

            } finally {
                setLoading(false);
            } 
        };
        fetchRecipe();
    } , [id]);

    if (loading) {
        return <div>Loading...</div>;

    }
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mx-auto p-4 bg-gray-400">
            <h1>{recipe.summary}</h1>
            <p>{recipe.image}</p>
            <p> {recipe.ingredients}</p>
            <p>{recipe.instructions}</p>

        </div>
    );
}

export default RecipeDetail;