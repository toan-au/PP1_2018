import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormTwo extends Component {

    state= 
    {
        Steam:"", 
        Playstation:"",
        Xbox:"",
        Nintendo:"",
        Discord:""
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
                Steam:"", 
                Playstation:"",
                Xbox:"",
                Nintendo:"",
                Discord:""
            });
        this.props.onChange(
        {
            Steam:"", 
            Playstation:"",
            Xbox:"",
            Nintendo:"",
            Discord:""
           
        });
      };

    render() 
    {
        return(
            <form>
             <div className="sign">
                <h1>Sign Up</h1>
            </div>
              <div className="Form">
              <label>Steam: </label>
                <input
                    name="Steam"
                    placeHolder="Steam"
                    value={this.state.Steam}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Playstation: </label>
                <input
                    name="Playstation"
                    placeHolder="PSN"
                    value={this.state.Playstation}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Xbox: </label>
                <input
                    name="Xbox"
                    placeHolder="Xbox live"
                    value={this.state.Xbox}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Nintendo: </label>
                <input
                    name="Nintendo"
                    placeHolder="Nintendo"
                    value={this.state.Nintendo}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Discord: </label>
                <input
                    name="Discord"
                    placeHolder="Discord"
                    value={this.state.Discord}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br/>
                <div className= "next">
                <Link to="/FormThree">
                    <button > Next</button>
                </Link>
                </div>
                </div>
            </form>
            

        )
    }
}
export default FormTwo;
