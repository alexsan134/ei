import React from 'react';
import './TextSection.css';

class TextSection extends React.Component{
   render(){
      return(
	 <div className={"textContainer "+this.props.color}>
            <h1>{this.props.title}</h1>
	    <p>{this.props.text}</p>
	    <div id="curve"></div>
	 </div>
      )
   }
}

export default TextSection;
