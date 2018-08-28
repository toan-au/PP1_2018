import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';

class RegistrationForm extends Component {
  state = {
    regions: [],
    locales: []
  };

  componentDidMount() {
    this.getRegionsList();
    this.getLocalesList();
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
    const { handleSubmit } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
          <div className="sign">
            <h1>Sign Up</h1>
          </div>
          <div className="Form">
            <label>DisplayName: </label>

            <Field name="DisplayName" component="input" placeholder="text" />

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

            <label>Steam: </label>
            <Field component="input" name="Steam" placeholder="Steam" />

            <label>Playstation: </label>
            <Field component="input" name="Playstation" placeholder="PSN" />

            <label>Xbox: </label>
            <Field component="input" name="Xbox" placeholder="Xbox live" />

            <label>Nintendo: </label>
            <Field component="input" name="Nintendo" placeholder="Nintendo" />

            <label>Discord: </label>
            <Field component="input" name="Discord" placeholder="Discord" />

            <label>Game1: </label>
            <input name="Game 1" placeholder="text" />

            <label>Game 2: </label>
            <input name="Game 2" placeholder="text" />

            <label>Game 3: </label>
            <input name="Game 3" placeholder="text" />

            <label>Game 4: </label>
            <input name="Game 4" placeholder="text" />

            <label>What is your playstyle?</label>

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

            <Field component="textarea" placeholder="Biography" />
            <div className="next">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'registration' })(RegistrationForm);
