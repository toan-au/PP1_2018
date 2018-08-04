import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

// Styles
import './styles/css/master.css';

// layout components
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

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
          <Navbar />
          <Body />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
