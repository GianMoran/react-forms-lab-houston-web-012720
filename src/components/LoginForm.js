import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }
  handleChangeUsername = (e) =>{
    // console.log("HandleChangedUser trigger", e.target)
    this.setState({
      username: e.target.value
    })
  }
  handleChangePassword = (e) =>{
    // console.log("HandleChangedPass trigger", e.target)
    this.setState({
      password: e.target.value
    })
  }
  handleSubmit= (e)=>{
     console.log("Handle login trigger",e.target)
    e.preventDefault()
    if(this.state.username !=="" && this.state.password !==""){
      return this.props.handleLogin(this.state)
    }

  }
  render() {
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange={(e)=>this.handleChangeUsername(e)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(e)=>this.handleChangePassword(e)} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
