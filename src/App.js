import React from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchRecipes, fetchRecipe} from './API'
import Errormessage from './Errormessage'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
    fetchRecipes("pasta")
      .then(res => {
        this.setState({recipes: res.results})
        if(res.status === "failure") this.setState(
          {errorMessage: "There was an error fetching recipes from the API."}
        )
      })
  }

  render() {
    let recipes;
    if(this.state.recipes) {
      recipes = <div>
        <h2>Recipes</h2>
        <ul>
          {this.state.recipes.map((recipe) => <li key={recipe.id}>{recipe.title}</li>)}
        </ul>
      </div>
    } else {
      recipes = "No recipes found"
    }
    return (
      
      <div className="App">
        {this.state.errorMessage && <Errormessage message={this.state.errorMessage}/> }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {recipes}
      </div>
    );
  }
}

export default App;
