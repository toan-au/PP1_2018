import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FormThree extends Component {

    state= 
    {
        Game1:"", 
        Game2:"",
        Game3:"",
        Game4:""
        
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
                Game1:"", 
                Game2:"",
                Game3:"",
                Game4:""
            });
        this.props.onChange(
        {
            Game1:"", 
            Game2:"",
            Game3:"",
            Game4:""
           
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
              <label>Game1: </label>
                <input
                    name="Game 1"
                    placeHolder="text"
                    value={this.state.Game1}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Game 2: </label>
                <input
                    name="Game 2"
                    placeHolder="text"
                    value={this.state.Game2}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Game 3: </label>
                <input
                    name="Game 3"
                    placeHolder="text"
                    value={this.state.Game3}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Game 4: </label>
                <input
                    name="Game 4"
                    placeHolder="text"
                    value={this.state.Game4}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Casual or Competitive?</label>
                <br/>
                <div>
                    <label><input name="Casual" type="radio" value="Casual" checked={this.state.selectedOption === 'Casual'} onChange={this.handleOptionChange}/>Casual</label>
                </div>
                <div>
                    <label><input name="Competitive" type="radio" value="Competitive" checked={this.state.selectedOption === 'Competitive'} onChange={this.handleOptionChange}/>Competitive</label>
                </div>
                <div className= "next">
                <Link to="/FormFour">
                    <button >Next</button>
                </Link>
                </div>
                </div>
            </form>
            

        )
    }
}
export default FormThree;