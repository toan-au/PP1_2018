import React from 'react';

const QuestionAnswerForm = props => {
  const { question, handleSubmit } = props;
  return (
    <div className="QuestionAnswerForm">
      <form onSubmit={handleSubmit}>{question.questionText}</form>
    </div>
  );
};

export default QuestionAnswerForm;
