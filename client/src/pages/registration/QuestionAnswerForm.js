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
      <h4 className="question">How important is this to you?</h4>
      <Field
        className="range"
        name={`importances.${questionId}`}
        component="input"
        type="range"
        min={0}
        max={3}
      />
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
