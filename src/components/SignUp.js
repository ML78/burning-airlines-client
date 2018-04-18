import React, {PureComponent as Component} from 'react';

class SignUpForm extends Component {
  render() {
    return(

        <form>
          <input type="text" placeholder="Joe"></input>
          <input type="submit" value="Sign Up!"></input>
        </form>

    )
  }
}
class SignUp extends Component {
  render() {
    return(
      <div>
        <h1>Sign Up</h1>
        <SignUpForm />
      </div>
    )
  }
}

  // Component 1: SignUp (children -> SignUpForm)

export default SignUp;
