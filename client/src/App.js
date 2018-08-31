import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './redux/actions/user';

// Styles
import './styles/css/master.css';

// layout components
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import AppSwitch from './routes';

class App extends Component {
  async componentDidMount() {
    await this.props.getUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Content>
            <AppSwitch />
          </Content>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

// maping the state(redux) to this.props within this component
const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { getUser }
)(App);
