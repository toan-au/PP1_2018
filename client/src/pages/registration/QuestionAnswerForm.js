import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class AnswerChoices extends Component {
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
              <label htmlFor={answer.id}>
                <input
                  name="answers"
                  id={answer.id}
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

const QuestionAnswerForm = props => {
  const {
    question,
    handleSubmit,
    question: { answers }
  } = props;
  return (
    <div className="RegistrationForm QuestionAnswerForm">
      <form onSubmit={handleSubmit}>
        <h4 className="question">{question.questionText}</h4>
        <Field
          name={'answers.' + question.id}
          component={AnswerChoices}
          answers={answers}
        />
        <div className="footer-buttons">
          <button className="next" type="submit">
            Next Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(QuestionAnswerForm);
