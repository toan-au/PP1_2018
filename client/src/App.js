import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

// Styles
import './styles/css/master.css';

// layout components
import Navbar from './components/Navbar';
import Content from './components/Content';
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
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
