import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={() => <h1>tiger</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
