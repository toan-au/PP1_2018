import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

const AnswerChoices = ({ answers, questionId, onSelection }) => {
  return (
    <div className="AnswerChoices">
      <div className="choices">
        {answers.map(answer => {
          return (
            <div className="choice" key={answer.id}>
              <label htmlFor={'answer' + answer.id}>
                <Field
                  name={`answers.${String(questionId)}`}
                  component="input"
                  id={'answer' + answer.id}
                  type="radio"
                  value={answer.answerKey}
                  onChange={onSelection}
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

const PreferenceChoices = ({ answers, questionId }) => {
  return (
    <div className="AnswerChoices">
      <h4 className="question">Your gaming buddy would ideally choose...</h4>
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

const RadioGroup = ({
  options,
  identifier,
  labelName,
  name,
  onSelection = () => {}
}) => {
  return (
    <div className="AnswerChoices">
      <div className="choices">
        {options.map(option => {
          return (
            <div className="choice" key={option[identifier]}>
              <label htmlFor={`${name}.${option[identifier]}`}>
                <Field
                  name={`${name}`}
                  component="input"
                  id={`${name}.${option[identifier]}`}
                  type="radio"
                  value={option[identifier]}
                  onChange={onSelection}
                />
                {option[labelName]}
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
    showPreferences: false
  };

  handleAnswerSelection = () => {
    this.setState({ showPreferences: true });
  };

  render() {
    const {
      question,
      handleSubmit,
      prevQuestion,
      question: { answers }
    } = this.props;
    const importances = [
      { name: 'none', value: 0 },
      { name: 'medium', value: 1 },
      { name: 'high', value: 3 }
    ];
    return (
      <div className="RegistrationForm QuestionAnswerForm">
        <form onSubmit={handleSubmit}>
          {/* Answer section */}
          <h4 className="question">{question.questionText}</h4>
          <AnswerChoices
            answers={answers}
            questionId={question.id}
            onSelection={this.handleAnswerSelection}
          />

          {/* Preferences section */}
          {this.state.showPreferences && (
            <PreferenceChoices answers={answers} questionId={question.id} />
          )}

          {/* Important */}
          <RadioGroup
            name={`importances.${question.id}`}
            options={importances}
            identifier="name"
            labelName="name"
          />

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

export default reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(QuestionAnswerForm);
