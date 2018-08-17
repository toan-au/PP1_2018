import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

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
              <div className="Home">
              <label>Game1: </label>
                <input
                    name="Game 1"
                    placeHolder="text"
                    value={this.state.Game1}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Game1: </label>
                <input
                    name="Game 2"
                    placeHolder="text"
                    value={this.state.Game2}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Game1: </label>
                <input
                    name="Game 3"
                    placeHolder="text"
                    value={this.state.Game3}
                    onChange={e => this.change(e)}
                />
                <br/>
                <br />
                <label>Game1: </label>
                <input
                    name="Game 4"
                    placeHolder="text"
                    value={this.state.Game4}
                    onChange={e => this.change(e)}
                />
                <br/>
                </div>
                <div className="Home">
                <br />
                <label>Casual or Competitive?</label>
                <div className="radio">
                    <label>
                        <input type="radio" value="Casual" checked={true} />
                        Casual
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="Competitive" />
                        Competitive
                    </label>
                </div>

                <button > Next</button>
                </div>
            </form>
            

        )
    }
}
export default Home;