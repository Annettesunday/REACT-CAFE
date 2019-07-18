import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signUp } from "../actions";

class SignupForm extends React.Component {
  renderError({ error, touched }) {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="error">{error}</div>
        </div>
      );
    }
  }
  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    console.log("I am getting here", formValues)
    this.props.signUp(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="email" label="Enter Email" component={this.renderInput} />
        <Field
          name="userName"
          label="Enter Username"
          type="text"
          component={this.renderInput}
        />
        <Field
          name="password"
          label="Enter Password"
          type="password"
          component={this.renderInput}
        />
        <Field
          name="confirmPassword"
          label="Confirm Your Password"
          type="password"
          component={this.renderInput}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.email) {
    errors.email = "Please an enter an email";
  }
  if (
    formValues.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!formValues.username) {
    errors.username = "Please enter a username";
  }
  if (!formValues.password) {
    errors.password = "Please enter a password";
  }
  if (!formValues.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  }
  return errors;
};

const renderedForm = reduxForm({
  form: "SignupForm",
  validate
})(SignupForm);

export default connect(
  null,
  { signUp }
)(renderedForm);
