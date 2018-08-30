import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class AnswerChoices extends Component {
  render() {
    const {
      answers,
      input: { onChange }
    } = this.props;
    return (
      <div className="AnswerChoices">
        {answers.map(answer => {
          return (
            <div className="choice" key={answer.id}>
              <label htmlFor={'answer' + answer.id}>
                <input
                  name="answers"
                  id={'answer' + answer.id}
                  type="radio"
                  value={answer.answerKey}
                  onChange={onChange}
                />
                {answer.answerText}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

class PreferenceChoices extends Component {
  state = { selection: '', limit: 1 };

  render() {
    const {
      answers,
      input: { onChange }
    } = this.props;
    // console.log(input);
    return (
      <div className="AnswerChoices">
        {answers.map(answer => {
          return (
            <div className="choice" key={answer.id}>
              <label htmlFor={'preference' + answer.id}>
                <input
                  name="preferences"
                  id={'preference' + answer.id}
                  type="checkbox"
                  value={answer.answerKey + 50}
                  onChange={onChange}
                />
                {answer.answerText}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}

class QuestionAnswerForm extends Component {
  state = {
    showPreferences: false
  };

  handleAnswerSelection = () => {
    this.setState({ showPreferences: true });
  };

  renderPreferenceChoices = () => {
    const { question } = this.props;
    return (
      <div>
        <h4 className="question">Your gaming buddy would ideally choose...</h4>
        <Field
          name={'preferences.' + question.id}
          component={PreferenceChoices}
          answers={question.answers}
        />
        <h4 className="question">How important is this to you?</h4>
        <Field
          name={'preferences.' + question.id + '.importance'}
          component="input"
          type="range"
        />
      </div>
    );
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
          <h4 className="question">{question.questionText}</h4>
          <Field
            name={'answers.' + question.id}
            component={AnswerChoices}
            answers={answers}
            onChange={this.handleAnswerSelection}
          />
          {this.state.showPreferences && this.renderPreferenceChoices()}
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
