import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: []
    };
  }

  async componentDidMount() {
    const res = await axios.get('/api/cats');
    const cats = res.data;
    this.setState({ cats });
  }

  render() {
    return (
      <div className="App">
        <ul>{this.state.cats.map(cat => <li>{cat}</li>)}</ul>
      </div>
    );
  }
}

export default App;
