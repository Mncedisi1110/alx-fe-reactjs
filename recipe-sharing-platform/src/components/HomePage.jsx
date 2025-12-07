import { useEffect , useState } from "react";
import router from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("./data.json");
                const data = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipes();
    } , []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (

        <div className="container mx-auto p-4 bg-gray-400">
            <router.Link to="./components/RecipeDetail" className="btn btn-primary mb-4" />
            <h1>Recipe Sharing Platform</h1>
            <ul className =" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-2 p-6 rounded shadow-md hover:shadow-gray-300 ,rounded-10 text-gray-400  ">
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default HomePage;