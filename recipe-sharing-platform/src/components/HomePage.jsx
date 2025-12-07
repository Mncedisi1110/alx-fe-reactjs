import { useEffect , useState } from "react";

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
        <div class="flex  justify-center min-h-screen bg-gray-500 sm:text-xl md:text-lg xs:text-sm">
            <h1>Recipe Sharing Platform</h1>
            <ul class ="mt-2 p-6 rounded-lg shadow-md hover:shadow-gray-300 ,rounded-10 text-gray-400  ">
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