import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'


export class App extends Component {

  responseGoogle=(response)=>{
    console.log(response)
    console.log(response.profileObj)
  }
  
  render() {
    return (
      <div>
          <GoogleLogin
          clientId="{GET IT FROM GOOGLE DEVELOPERS CONSOLE BY CREATING A PROJECT }"
          buttonText="login"
          onSuccess={this.responseGoogle}
          onFailure ={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
      </div>
    )
  }
}

export default App
