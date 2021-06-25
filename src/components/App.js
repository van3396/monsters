import React, { Component } from "react";
import "../css-components/App.css";

import { CardList } from "./CardList";
import { SearchBox } from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log('constructor')
  }

  componentDidMount() {
    console.log('fire')
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSeachChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };

  render() {
    console.log('render')
    const { monsters, searchField } = this.state;
    const fileteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="header">Monsters</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={fileteredMonsters} />

        <footer>
          <p>Created by Qui Van 2021</p>
        </footer>
      </div>
    );
  }
}

export default App;
