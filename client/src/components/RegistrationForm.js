import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class RegistrationForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="sign">
            <h1>Sign Up</h1>
          </div>
          <div className="Form">
            <p>
              <label>DisplayName: </label>
              <br />
              <input name="DisplayName" placeHolder="text" />
              <br />
              <br />
              <label>Region: </label>
              <br />
              <select>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
                <option value="Europe">Europe</option>
                <option value="China">China</option>
                <option value="Korea">Korea</option>
                <option value="Japan">Japan</option>
              </select>
              <br />
              <br />
              <label>Language: </label>
              <br />
              <select>
                <option value="English">English</option>
                <option value="Chinese">Chinese</option>
                <option value="Spanish">Spanish</option>
                <option value="Japanese">Japanese</option>
                <option value="Korean">Korean</option>
              </select>
              <br />
              <br />
              <label>Age: </label>
              <br />
              <select>
                <option value="18-20">18-20</option>
                <option value="21-25">21-25</option>
                <option value="26-30">26-30</option>
                <option value="31-35">31-35</option>
                <option value="36+">36+</option>
              </select>
              <br />
              <br />
              <label>Steam: </label>
              <input name="Steam" placeHolder="Steam" />
              <br />
              <br />
              <label>Playstation: </label>
              <input name="Playstation" placeHolder="PSN" />
              <br />
              <br />
              <label>Xbox: </label>
              <input name="Xbox" placeHolder="Xbox live" />
              <br />
              <br />
              <label>Nintendo: </label>
              <input name="Nintendo" placeHolder="Nintendo" />
              <br />
              <br />
              <label>Discord: </label>
              <input name="Discord" placeHolder="Discord" />
              <br />
              <br />
              <label>Game1: </label>
              <input name="Game 1" placeHolder="text" />
              <br />
              <br />
              <label>Game 2: </label>
              <input name="Game 2" placeHolder="text" />
              <br />
              <br />
              <label>Game 3: </label>
              <input name="Game 3" placeHolder="text" />
              <br />
              <br />
              <label>Game 4: </label>
              <input name="Game 4" placeHolder="text" />
              <br />
              <br />
              <label>Casual or Competitive?</label>
              <br />
              <div>
                <label>
                  <input
                    name="Casual"
                    type="radio"
                    value="Casual"
                    checked={true}
                    onChange={this.handleOptionChange}
                  />
                  Casual
                </label>
              </div>
              <div>
                <label>
                  <input
                    name="Competitive"
                    type="radio"
                    value="Competitive"
                    checked={false}
                    onChange={this.handleOptionChange}
                  />
                  Competitive
                </label>
              </div>

              <label>Bio: </label>
              <br />
              <textarea
                className="text"
                rows="15"
                cols="50"
                name="Bio"
                placeHolder="Biography"
              />
              <br />
              <br />
            </p>

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
