import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// redux actions
import { updateUser } from '../../redux/actions/user';

// registration forms
import RegistrationForm1 from './RegistrationForm1';
import QuestionAnswerForm from './QuestionAnswerForm';

class Registration extends Component {
  state = {
    page: 1,
    currentQuestion: 0,
    questions: [],
    questionForms: []
  };

  componentDidMount = async () => {
    const response = await axios.get('/api/questions');
    this.setState({ questions: response.data });
    this.renderQuestions();
  };

  handleSubmit = async values => {
    console.log('user:' + this.props.user.id);
    await this.props.updateUser(this.props.user.id, values);
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  // render all questions as multipage form components
  // if it is not the last question then make the submit action go to the next question
  renderQuestions() {
    const { questions } = this.state;
    const questionForms = questions.map((question, index) => {
      const lastQuestion = index === questions.length - 1;
      const firstQuestion = index === 0;
      return (
        <QuestionAnswerForm
          key={question.id}
          question={question}
          prevQuestion={(firstQuestion && this.prevPage) || this.prevQuestion}
          onSubmit={(lastQuestion && this.handleSubmit) || this.nextQuestion}
        />
      );
    });
    return this.setState({ questionForms });
  }

  prevQuestion = () => {
    this.setState({ currentQuestion: this.state.currentQuestion - 1 });
  };

  nextQuestion = () => {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
  };

  render() {
    const { page } = this.state;
    return (
      <div className="Registration">
        {page === 1 && <RegistrationForm1 onSubmit={this.nextPage} />}
        {page === 2 && this.state.questionForms[this.state.currentQuestion]}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(
  mapStateToProps,
  { updateUser }
)(Registration);
