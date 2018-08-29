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
              <input
                name="answers"
                id={answer.id}
                type="radio"
                value={answer.id}
                onChange={onChange}
              />
              <label htmlFor={answer.id}>{answer.answerText}</label>
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
    <div className="QuestionAnswerForm">
      <form onSubmit={handleSubmit}>
        <h4 className="question">{question.questionText}</h4>
        <Field
          name={'answers.' + question.id}
          component={AnswerChoices}
          answers={answers}
        />
        <button type="submit">Next Question</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: { answers: {} }
})(QuestionAnswerForm);
