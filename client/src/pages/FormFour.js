import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormFour extends Component {

    state= 
    {
        Bio:""
        
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
                Bio:""
            });
        this.props.onChange(
        {
            Bio:""
           
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
              <label>Bio: </label>
              <br/>
                <textarea className="text" rows="25" cols="50"
                    name="Bio"
                    placeHolder="Biography"
                    value={this.state.Bio}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br/>
                
                <div className= "next">
                <Link to="/">
                    <button >Submit</button>
                </Link>
                </div>
                </div>
            </form>
            

        )
    }
}
export default FormFour;
