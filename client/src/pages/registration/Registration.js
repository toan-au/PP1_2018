import React, { Component } from 'react';
import RegistrationForm1 from './RegistrationForm1';
import RegistrationForm2 from './RegistrationForm2';
import RegistrationForm3 from './RegistrationForm3';

class Registration extends Component {
  state = {
    page: 1
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  handleSubmit(values) {
    console.log(values);
  }
  render() {
    const { page } = this.state;
    return (
      <div className="Register">
        {page == 1 && <RegistrationForm1 onSubmit={this.nextPage} />}
        {page == 2 && <RegistrationForm2 onSubmit={this.nextPage} />}
        {page == 3 && <RegistrationForm3 onSubmit={this.handleSubmit} />}
      </div>
    );
  }
}

export default Registration;
