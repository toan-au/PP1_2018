import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

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
              <div className="Home">
              <label>Bio: </label>
                <input
                    name="Bio"
                    placeHolder="text"
                    value={this.state.Bio}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br/>
                </div>
                
                <button > Next</button>
                
            </form>
            

        )
    }
}
export default Home;