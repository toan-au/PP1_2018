import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import QuestionAnswerForm from './QuestionAnswerForm';
import { connect } from 'react-redux';
import axios from 'axios';

class RegistrationForm1 extends Component {
  state = {
    currentQuestion: 0,
    questions: []
  };

  async componentDidMount() {
    const response = await axios.get('/api/questions');
    this.setState({ questions: response.data });
  }

  nextQuestion = () => {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  };

  renderQuestions() {
    const questions = this.state.questions.map(question => {
      // render all questions as multipage form components
      // if it is not the last question then make the submit action go to the next question
      if (this.state.currentQuestion == this.state.questions.length)
        <QuestionAnswerForm
          key={question.id}
          question={question}
          onSubmit={this.props.handleSubmit}
        />;
      return (
        <QuestionAnswerForm
          key={question.id}
          question={question}
          onSubmit={this.nextQuestion}
        />
      );
    });
    return questions;
  }

  render() {
    const { handleSubmit, user } = this.props;
    return (
      <div className="RegistrationForm">
        <div>
          <div className="sign">
            <h1>Sign Up</h1>
          </div>
          <div className="Form">
            {this.renderQuestions()}
            <div className="next">
              <button type="submit">Next page</button>
            </div>
          </div>
        </div>
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
