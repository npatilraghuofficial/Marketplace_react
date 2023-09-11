// AnimatedCards.js

import React, { Component } from "react";
import Card from "@mui/material/Card";

class AnimatedCards extends Component {
//   state: { shadow: 1 };
constructor(props) {
    super(props);

    // Initialize the state
    this.state = {
      shadow: 1,
    };
    }

  onMouseOver = () => this.setState({ shadow: 3 });

  onMouseOut = () => this.setState({ shadow: 1 });

  render() {
    return (

        <>
       <h3>animated</h3>
        
      <Card
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        zDepth={this.state.shadow}
      >
        {this.props.children}
      </Card> 
      </>
      
    );
  }
}
export default AnimatedCards;
