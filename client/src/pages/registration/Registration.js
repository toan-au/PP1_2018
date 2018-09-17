import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// redux actions
import { updateUser } from '../../redux/actions/user';

// registration forms
import ProfileForm from './ProfileForm';
import PlatformForm from './PlatformForm';
import QuestionAnswerForm from './QuestionAnswerForm';
import GameAndGenresForm from './GameAndGenresForm';
import ConfirmationForm from './ConfirmationForm';

class Registration extends Component {
  state = {
    page: 1,
    currentQuestion: 0,
    questions: [],
    questionForms: [],
    redirect: false
  };

  componentDidMount = async () => {
    const response = await axios.get('/api/questions');
    this.setState({ questions: response.data });
    this.renderQuestions();
  };

  handleSubmit = async values => {
    console.log(values);
    await this.props.updateUser(this.props.user.id, values);
    console.log(this.props.user);
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) return <Redirect to="/" />;
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
          onSubmit={(lastQuestion && this.nextPage) || this.nextQuestion}
        />
      );
    });
    // return only 1 for testing purposes
    return this.setState({
      questionForms
    });
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
        {page === 1 && <ProfileForm onSubmit={this.nextPage} />}
        {page === 2 && (
          <PlatformForm
            onSubmit={this.nextPage}
            onPrevious={this.prevPage}
          />
        )}
        {page === 3 && this.state.questionForms[this.state.currentQuestion]}
        {page === 4 && (
          <GameAndGenresForm
            onSubmit={this.nextPage}
            onPrevious={this.prevPage}
          />
        )}

        {page === 5 && (
          <ConfirmationForm
            onSubmit={this.handleSubmit}
            onPrevious={this.prevPage}
          />
        )}

        {this.renderRedirect()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
export default connect(
  mapStateToProps,
  { updateUser }
)(Registration);
