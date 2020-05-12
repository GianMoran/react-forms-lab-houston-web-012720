import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  handleChange = (e)=>{
    console.log("Handle change trigger", e.target)
    this.setState({
      message: e.target.value
    })
   
  }
  render() {
    let counter = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(e)=>this.handleChange(e)} type="text" name="message" id="message" value={this.state.message}/> {counter}
      </div>
    );
  }
}

export default TwitterMessage;
