import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import PfpInput from './PfpInput';

const SelectWithError = ({
  input,
  type,
  meta: { touched, error, warning },
  children
}) => (
  <div class="SelectWithError">
    {(touched && (error && <span className="error">{error}</span>)) ||
      (warning && <span>{warning}</span>)}
    <select {...input}>{children}</select>
  </div>
);

class RegistrationForm1 extends Component {
  state = {
    regions: [],
    locales: []
  };

  // validation for select fields
  selected = value => (value != -1 ? undefined : 'Please select an option');

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

  render() {
    const { handleSubmit, age, region } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Sign Up</h2>
          <div className="form-body">
            <div className="left">
              <Field name="pfp" component={PfpInput} />
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
                  <option value="-1" disabled>
                    Please select an option
                  </option>
                  <option value="1">18-20</option>
                  <option value="2">21-25</option>
                  <option value="3">26-30</option>
                  <option value="4">31-35</option>
                  <option value="5">36+</option>
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
                placeholder="Biography"
                name="bio"
                required="required"
              />
            </div>
          </div>
          <div className="footer-buttons">
            <button className="next" type="submit">
              Next
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const selector = formValueSelector('registration');
const mapStateToProps = state => {
  const age = selector(state, 'age');
  const region = selector(state, 'region');
  const locale = selector(state, 'locale');

  return { age, region, locale };
};

// hook up with red-form
let registrationForm1 = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {
    answers: {},
    preferences: {},
    importances: {},
    age: -1,
    region: -1,
    locale: -1
  }
})(RegistrationForm1);

// connect to the redux store
registrationForm1 = connect(mapStateToProps)(registrationForm1);

// export HOC
export default registrationForm1;
