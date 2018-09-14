import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './redux/actions/user';
import { getPending } from './redux/actions/pending';

// Styles
import './styles/css/master.css';

// layout components
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import AppSwitch from './routes';
import Loading from './pages/Loading';

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.props.getUser().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { loading } = this.state;
    console.log(loading);
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar loading={loading} />
          {loading ? (
            <Loading />
          ) : (
            <Content>
              <AppSwitch />
            </Content>
          )}
          <Footer loading={loading} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { getUser, getPending }
)(App);
