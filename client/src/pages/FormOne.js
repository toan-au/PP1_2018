import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    state= 
    {
        DisplayName:"", 
        Region:"",
        Language:"",
        Age:""
    };
    change = e => {
        this.props.onChange({ [e.target.text]: e.target.value });
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      onSubmit = e => 
      {
        e.preventDefault();
        
        this.setState(
            {
                DisplayName: "",
                Region: "",
                Language: "",
                Age: ""
            });
        this.props.onChange(
        {
            DisplayName: "",
            Region: "",
            Language: "",
            Age: ""
           
        });
      };

    render() 
    {
        return(
            <form>
              <div className="Home">
              <label>DisplayName: </label>
                <input
                    name="DisplayName"
                    placeHolder="text"
                    value={this.state.DisplayName}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Region: </label>
                <input
                    name="Region"
                    placeHolder="text"
                    value={this.state.Region}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Language: </label>
                <input
                    name="Language"
                    placeHolder="text"
                    value={this.state.Language}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Age: </label>
                <input
                    name="Age"
                    placeHolder="Number"
                    value={this.state.ge}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <button > Next</button>
                </div>
            </form>
            

        )
    }
}
export default Home;