import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './redux/actions/user';

// Styles
import './styles/css/master.css';

// layout components
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  async componentDidMount() {
    await this.props.getUser();
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

// maping the state(redux) to this.props within this component
const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { getUser }
)(App);
