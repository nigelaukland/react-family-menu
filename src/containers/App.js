import React, { Component } from 'react';
import { List, Container, Button, Input, Menu } from 'semantic-ui-react';

// import styles
import './App.css';

// import functional components
import Recipes from '../components/Recipes/Recipes.js';

class App extends Component {
  state = {
    recipes: [],
    showRecipes: true
  };

  componentDidMount() {
    fetch('http://localhost:50001/recipes')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data[0].name);
        this.setState({ recipes: data });
      });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleShowRecipesClick = (e, { name }) =>
    this.setState({ showRecipes: !this.state.showRecipes });

  render() {
    let recipes = null;
    if (this.state.showRecipes) {
      recipes = <Recipes recipes={this.state.recipes} />;
    }

    const activeItem = 'home';

    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
        <Menu color="red">
          <Menu.Item
            name="Home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Menus"
            active={activeItem === 'Menus'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Recipes"
            active={activeItem === 'Recipes'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Shopping List"
            active={activeItem === 'Shopping List'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Container>
          <Button primary onClick={this.handleShowRecipesClick}>
            Show/Hide Recipes
          </Button>
          <List relaxed celled>
            {recipes}
          </List>
        </Container>
      </div>
    );
  }
}

export default App;
