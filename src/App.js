import RecipesForm from './components/RecipesForm/RecipesForm';
import RecipesList from './components/RecipesList/RecipesList';
import RecipesSelected from './components/RecipesSelected/RecipesSelected';
import './App.css';

function App() {
  return (
    <div className="App">
      <RecipesForm></RecipesForm>
      <RecipesList></RecipesList>
      <RecipesSelected></RecipesSelected>
    </div>
  );
}

export default App;
