import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import PfpInput from './PfpInput';
import SelectWithError from '../../components/SelectWithError';

class ProfileForm extends Component {
  state = {
    regions: [],
    locales: []
  };

  // validation for select fields
  selected = value => (value !== '-1' ? undefined : 'Please select an option');
  validateImage = imageList => {
    if (imageList) {
      if (imageList.length !== 1) {
        return 'You must upload an image';
      } else if (imageList.length === 1) {
        let selectedImage = imageList[0];
        if (!selectedImage.type.match('image.*')) {
          return 'Only image files are allowed';
        } else if (selectedImage.size > 1048576) {
          return 'Maximum file size exceeded';
        }
      }
    } else {
      return 'You must upload a profile picture';
    }
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

  // renders a list of drop down options for locles from API
  renderRegions() {
    const regionItems = this.state.regions.map(region => {
      return (
        <option key={region.id} value={region.id}>
          {region.region}
        </option>
      );
    });
    return regionItems;
  }

  // renders a list of drop down options for locles from API
  renderLocales() {
    const localeItems = this.state.locales.map(locale => {
      return (
        <option key={locale.id} value={locale.id}>
          {locale.locale}
        </option>
      );
    });
    return localeItems;
  }

  renderAges = () => {
    const ages = [...Array(100).keys()];
    const ageItems = ages.map(age => (
      <option key={age} value={age}>
        {age}
      </option>
    ));
    return ageItems;
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Register</h2>
          <div className="form-body grid">
            <div className="left">
              <Field
                required
                name="pfp"
                component={PfpInput}
                validate={this.validateImage}
              />
            </div>
            <div className="right">
              <div className="field">
                <label>Display Name: </label>
                <Field
                  name="displayName"
                  component="input"
                  placeholder=" Display name"
                  required="required"
                />
              </div>

              <div className="field">
                <label>Region: </label>
                <Field
                  name="region"
                  component={SelectWithError}
                  validate={this.selected}
                >
                  <option value="-1" disabled>
                    Please select an option
                  </option>
                  {this.renderRegions()}
                </Field>
              </div>

              <div className="field">
                <label>Language: </label>
                <Field
                  name="locale"
                  component={SelectWithError}
                  validate={this.selected}
                >
                  <option value="-1" disabled>
                    Please select an option
                  </option>
                  {this.renderLocales()}
                </Field>
              </div>

              <div className="field">
                <label>Age: </label>
                <Field
                  name="age"
                  component={SelectWithError}
                  validate={this.selected}
                >
                  {this.renderAges()}
                </Field>
              </div>

              <div className="field">
                <label>Casual</label>
                <Field
                  name="playstyle"
                  component="input"
                  type="radio"
                  value="casual"
                  required="required"
                />
              </div>
              <div className="field">
                <label>Competitive</label>
                <Field
                  name="playstyle"
                  component="input"
                  type="radio"
                  value="competitive"
                  required="required"
                />
              </div>
            </div>
            <div className="bio">
              <label>Bio: </label>
              <Field
                component="textarea"
                placeholder="Describe yourself..."
                name="bio"
                required="required"
              />
            </div>
          </div>
          <div className="footer-buttons">
            <div />
            <button className="next" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

// hook up with red-form
let profileForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {
    answers: {},
    preferences: {},
    importances: {},
    age: 20,
    region: -1,
    locale: -1,
    playstyle: 'casual',
    genres: {},
    games: [],
    platforms: {}
  }
})(ProfileForm);

// export HOC
export default profileForm;
