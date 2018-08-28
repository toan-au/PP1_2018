import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import QuestionAnswerForm from './QuestionAnswerForm';
import { connect } from 'react-redux';
import axios from 'axios';

class RegistrationForm1 extends Component {
  state = {
    currentQuestion: 0,
    questions: [],
    questionForms: []
  };

  async componentDidMount() {
    const response = await axios.get('/api/questions');
    this.setState({ questions: response.data });
    this.renderQuestions();
  }

  nextQuestion = () => {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  };

  // render all questions as multipage form components
  // if it is not the last question then make the submit action go to the next question
  renderQuestions() {
    const { questions, currentQuestion } = this.state;
    const lastQuestion = currentQuestion == questions.length - 1;
    const questionForms = questions.map(question => (
      <QuestionAnswerForm
        key={question.id}
        question={question}
        onSubmit={
          (lastQuestion && this.props.handleSubmit) || this.nextQuestion
        }
      />
    ));
    return this.setState({ questionForms });
  }

  render() {
    const { handleSubmit, user } = this.props;
    return (
      <div className="RegistrationForm">
        <form onSubmit={this.handleSubmit}>
          <div className="sign">
            <h1>Sign Up</h1>
          </div>
          {this.state.questionForms[this.state.currentQuestion]}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

let registrationForm1 = reduxForm({
  form: 'registration',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(RegistrationForm1);
registrationForm1 = connect(mapStateToProps)(registrationForm1);
export default registrationForm1;
