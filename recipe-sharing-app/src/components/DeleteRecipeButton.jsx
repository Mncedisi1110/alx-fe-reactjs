
function DeleteRecipeButton({ onDelete }) {
  return (
    <button onClick={onDelete} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete Recipe
    </button>
  );
}
export default DeleteRecipeButton;
// // This is a simple button component for deleting a recipe.
// // It takes an onDelete prop which is a function to be called when the button is clicked.