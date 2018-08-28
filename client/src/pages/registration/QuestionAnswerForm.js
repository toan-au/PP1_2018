import React from 'react';
import { reduxForm, Field } from 'redux-form';

const QuestionAnswerForm = props => {
  const { question, handleSubmit } = props;

  const renderAnswersChoices = () =>
    question.answers.map(answer => (
      <Field
        key={answer.id}
        name={'answers.' + answer.id}
        component="input"
        type="radio"
        value={answer.answerKey}
      />
    ));

  return (
    <div className="QuestionAnswerForm">
      <form onSubmit={handleSubmit}>
        <h4 className="question">{question.questionText}</h4>
        <div className="answer-choices">{renderAnswersChoices()}</div>
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
