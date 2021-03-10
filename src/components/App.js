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
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const fileteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={fileteredMonsters} />
      </div>
    );
  }
}

export default App;
