function EditRecipeForm ({ recipe, onSave, onCancel }) {
  const [title, setTitle] = React.useState(recipe.title);
  const [ingredients, setIngredients] = React.useState(recipe.ingredients);
  const [instructions, setInstructions] = React.useState(recipe.instructions);
    const [error, setError] = React.useState(null);
    const [isSaving, setIsSaving] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);
    try {
        await onSave({ ...recipe, title, ingredients, instructions });
    } catch (err) {
        setError('Failed to save recipe. Please try again.');
    } finally {
        setIsSaving(false);
    }
    };
    return (
    <form onSubmit={handleSubmit}>
        <div>
        <label>Title:</label>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        </div>
        <div>
        <label>Ingredients:</label>
        <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
        />
        </div>
        <div>
        <label>Instructions:</label>
        <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
        />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save'}
        </button>
        <button type="button" onClick={onCancel} disabled={isSaving}>
        Cancel
        </button>
    </form>
    );
}
export default EditRecipeForm;
// --- IGNORE ---

    

    