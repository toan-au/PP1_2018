import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

class FormOne extends Component {

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
            <div className="banner">
                <h1>Sign Up</h1>
            </div>
              <div className="Form">
              <label>DisplayName: </label>
              <br/>
                <input
                    name="DisplayName"
                    placeHolder="text"
                    value={this.state.DisplayName}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Region: </label>
                <br/>
                {/* <option
                    name="Region"
                    placeHolder="text"
                    value={this.state.Region}
                    onChange={e => this.change(e)}
                /> */}
                <select>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Europe">Europe</option>
                    <option value="China">China</option>
                    <option value="Korea">Korea</option>
                    <option value="Japan">Japan</option>

                </select>
                <br/>
                <br />
                <label>Language: </label>
                <br/>
                {/* <input
                    name="Language"
                    placeHolder="text"
                    value={this.state.Language}
                    onChange={e => this.change(e)}
                /> */}
                <select>
                    <option value="English">English</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                </select>
                <br/>
                <br />
                <label>Age: </label>
                <br/>
                {/* <input
                    name="Age"
                    placeHolder="number"
                    value={this.state.ge}
                    onChange={e => this.change(e)}
                /> */}
                <select>
                    <option value="18-20">18-20</option>
                    <option value="21-25">21-25</option>
                    <option value="26-30">26-30</option>
                    <option value="31-35">31-35</option>
                    <option value="36+">36+</option>
                </select>
                <br/>
                <br />
                <div className= "next">
                <Link to="/FormTwo">
                    <button > Next</button>
                </Link>
                </div>
                </div>
            </form>
            

        )
    }
}
export default FormOne;