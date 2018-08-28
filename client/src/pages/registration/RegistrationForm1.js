import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

class RegistrationForm1 extends Component {
  state = {
    regions: [],
    locales: []
  };

  async componentDidMount() {
    // this.getRegionsList();
    // this.getLocalesList();
    const { user } = this.props;
    this.props.initialize({ displayName: user.displayName });
    console.log(5);
  }

  async getRegionsList() {
    const response = await axios.get('/api/regions');
    this.setState({ regions: response.data });
  }

  async getLocalesList() {
    const response = await axios.get('/api/locales');
    this.setState({ locales: response.data });
  }

  renderRegions() {
    const regionItems = this.state.regions.map(region => {
      return <option value={region.id}>{region.region}</option>;
    });
    return regionItems;
  }

  renderLocales() {
    const localeItems = this.state.locales.map(locale => {
      return <option value={locale.id}>{locale.locale}</option>;
    });
    return localeItems;
  }

  render() {
    const { handleSubmit, user } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
          <div className="sign">
            <h1>Sign Up</h1>
          </div>
          <div className="Form">
            <label>DisplayName: </label>

            <Field
              name="displayName"
              component="input"
              placeholder="display name"
            />

            <label>Region: </label>

            <select>{this.renderRegions()}</select>

            <label>Language: </label>

            <select>{this.renderLocales()}</select>

            <label>Age: </label>

            <select>
              <option value="18-20">18-20</option>
              <option value="21-25">21-25</option>
              <option value="26-30">26-30</option>
              <option value="31-35">31-35</option>
              <option value="36+">36+</option>
            </select>
            <div>
              <Field
                name="playstyle"
                component="input"
                type="radio"
                value="casual"
              />
              <label>Casual</label>

              <Field
                name="playstyle"
                component="input"
                type="radio"
                value="competitive"
              />
              <label>Competitive</label>
            </div>

            <label>Bio: </label>

            <Field component="textarea" placeholder="Biography" name="bio" />
            <div className="next">
              <button type="submit">Next page</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

let registrationForm1 = reduxForm({
  form: 'registration'
})(RegistrationForm1);
registrationForm1 = connect(mapStateToProps)(registrationForm1);
export default registrationForm1;
