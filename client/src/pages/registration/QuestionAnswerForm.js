import React from 'react';
import { reduxForm } from 'redux-form';

const QuestionAnswerForm = props => {
  const { question, handleSubmit } = props;
  return (
    <div className="QuestionAnswerForm">
      <form onSubmit={handleSubmit}>
        {question.questionText}
        <button type="submit">Next Question</button>
      </form>
    </div>
  );
};

export default reduxForm({ form: 'register' })(QuestionAnswerForm);
