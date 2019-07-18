import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn } from "../actions";

class LoginForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="error">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, meta, type }) => {
    // console.log(type);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.signIn(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="email"
          component={this.renderInput}
          label="Enter Email"
          type="text"
        />
        <Field
          name="password"
          component={this.renderInput}
          label="Enter Password"
          type="password"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = "Invalid email address";
  }

  if (formValues.password < 6) {
    errors.password = "Password must be more than 6 characters";
  }

  if (!formValues.email) {
    errors.email = "You must enter an email address";
  }
  if (!formValues.password) {
    errors.password = "You must enter a password";
  }

  return errors;
};

const renderedForm = reduxForm({
  form: "AuthForm",
  validate
})(LoginForm);

export default connect(
  null,
  { signIn }
)(renderedForm);
