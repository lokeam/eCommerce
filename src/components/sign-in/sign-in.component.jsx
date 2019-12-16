import React from 'react';
import FormInput from '../form-input/form-input.component';
import CTABtn from '../cta-btn/cta-btn.component';
import styles from './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  _handleSubmit = event => {
    event.preventDefault();

    this.setState(
      {
        email: '',
        password: ''
      }
    );
  }

  _handleChange = event => {
    const { value, name } = event.target;
    this.setState( { [name]: value } );
  }

  render() {
    return(
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
      
        <form action="" onSubmit={ this._handleSubmit }>
          <FormInput name="email"
                     label="email"
                     type="email"
                     value={ this.state.email }
                     handleChange={ this._handleChange }
                     required/>
          <FormInput name="password"
                     label="password"
                     type="password"
                     value={ this.state.password }
                     handleChange={ this._handleChange }
                     required/>

          <CTABtn type="submit">Sign In</CTABtn>
        </form>
      </div>
    );
  }
}

export default SignIn;