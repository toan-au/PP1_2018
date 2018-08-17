import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

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
              <div className="Home">
              <label>DisplayName: </label>
                <input
                    name="Steam"
                    placeHolder="text"
                    value={this.state.Steam}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Region: </label>
                <input
                    name="Playstation"
                    placeHolder="text"
                    value={this.state.Playstation}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Language: </label>
                <input
                    name="Xbox"
                    placeHolder="text"
                    value={this.state.Xbox}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Age: </label>
                <input
                    name="Nintendo"
                    placeHolder="text"
                    value={this.state.Nintendo}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Age: </label>
                <input
                    name="Discord"
                    placeHolder="text"
                    value={this.state.Discord}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br/>
                <button > Next</button>
                </div>
            </form>
            

        )
    }
}
export default Home;