import React, { Component } from 'react';

import Form from '../../components/form/form';
import CustomButton from '../../components/custom-button/custom-button';
import Orders from '../orders/orders';
import './sign-in.scss';

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      logedIn: false,
    };
  }

  componentDidMount() {
    this.hideNav();
  }

  hideNav = () => {
    const nav = document.querySelector('#navbar');
    const footer = document.querySelector('.footer');

    nav.style.display = 'none';
    footer.style.display = 'none';
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '', logedIn: true });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value }, () => {
      console.log(this.state[name]);
    });
  };

  signIn = (
    <div className="sign-in">
      <form onSubmit={this.handleSubmit}>
        <Form
          name="email"
          type="email"
          label="Email"
          handleChange={this.handleChange}
          required
        />
        <Form
          name="password"
          type="password"
          label="Password"
          handleChange={this.handleChange}
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );

  render() {
    if (this.state.logedIn) {
      return <Orders />;
    } else {
      return this.signIn;
    }
  }
}
