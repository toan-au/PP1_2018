import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import RadioGroup from '../../components/RadioGroup';
import { connect } from 'react-redux';

const PreferenceChoices = ({ answers, questionId, error }) => {
  return (
    <div className="RadioGroup">
      <h4 className="question">Your gaming buddy would ideally choose...</h4>
      {error && <span className="error">{error}</span>}
      <div className="choices">
        {answers.map(answer => {
          return (
            <div className="choice" key={answer.id}>
              <label htmlFor={'preference' + answer.id}>
                <Field
                  name={`preferences.${questionId}.${answer.answerKey}`}
                  component="input"
                  id={'preference' + answer.id}
                  type="checkbox"
                  value={answer.answerKey}
                />
                {answer.answerText}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

class QuestionAnswerForm extends Component {
  state = {
    error: '',
    showPreferences: false
  };

  handleAnswerSelection = () => {
    this.setState({ showPreferences: true });
  };

  handleSubmit = values => {
    values.preventDefault();
    const { handleSubmit, question, preferences } = this.props;
    // validate preferences

    console.log(preferences);
    if (!(question.id in preferences)) {
      this.setState({ error: 'you must choose atleast 1 preference' });
      return false;
    }

    if (
      Object.values(preferences[question.id]).filter(pref => pref === true)
        .length < 1
    ) {
      this.setState({ error: 'you must choose atleast 1 preference' });
      return false;
    }

    handleSubmit(values);
  };

  render() {
    const {
      question,
      prevQuestion,
      question: { answers }
    } = this.props;
    const importances = [
      { name: 'low', value: 1 },
      { name: 'medium', value: 2 },
      { name: 'high', value: 3 }
    ];
    return (
      <div className="RegistrationForm QuestionAnswerForm">
        <form onSubmit={this.handleSubmit}>
          {/* Answer section */}
          <h4 className="question">{question.questionText}</h4>
          <RadioGroup
            options={answers}
            name={`answers.${question.id}`}
            identifier="answerKey"
            valueName="answerKey"
            labelName="answerText"
            onSelection={this.handleAnswerSelection}
          />

          {/* Preferences section */}
          {this.state.showPreferences && (
            <PreferenceChoices
              answers={answers}
              questionId={question.id}
              error={this.state.error}
            />
          )}

          {/* Important */}
          {this.state.showPreferences && (
            <div>
              <h4 className="question">How important is this for you?</h4>
              <RadioGroup
                className="importance"
                name={`importances.${question.id}`}
                options={importances}
                identifier="name"
                labelName="name"
                valueName="name"
              />
            </div>
          )}

          {/* footer */}
          <div className="footer-buttons">
            <button className="previous" type="button" onClick={prevQuestion}>
              Previous
            </button>
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
const mapStateToProps = state => ({
  preferences: selector(state, 'preferences')
});

let questionAnswerForm = connect(
  mapStateToProps,
  {}
)(QuestionAnswerForm);

questionAnswerForm = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(questionAnswerForm);

export default questionAnswerForm;
