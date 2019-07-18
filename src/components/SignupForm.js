import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signUp } from "../actions";
import renderApiErrors from "../utils/renderApiErrors";

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

  onSubmit = formValues => this.props.signUp(formValues);

  render() {
    const error = this.props.initialValues.newError;
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
        <button
          className="ui center button primary"
          type="submit"
          disabled={this.props.submitting}
        >
          {this.props.submitting ? "Submitting" : "Submit"}
        </button>
        {renderApiErrors(error)}
      </form>
    );
  }
}

const validate = formValues => {
  const email = formValues.email;
  const userName = formValues.userName;
  const password = formValues.password;
  const confirmPassword = formValues.confirmPassword;

  const errors = {};

  if (!email) {
    errors.email = "Field must not be empty";
  } else if (
    email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!userName) {
    errors.userName = "Field must not be empty";
  } else if (userName && userName.length < 6) {
    errors.userName = "Username must not be less than 6 characters";
  }
  if (!password) {
    errors.password = "Field must not be empty";
  } else if (password && password.length < 6) {
    errors.password = "Password must not be less than 6 characters";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Field must not be empty";
  } else if (confirmPassword && confirmPassword !== formValues.password) {
    errors.confirmPassword = "Password must match";
  }
  return errors;
};

const renderedForm = reduxForm({
  form: "SignupForm",
  validate,
  enableReinitialize: true
})(SignupForm);

const mapStateToProps = state => {
  return {
    initialValues: state.errors
  };
};

export default connect(
  mapStateToProps,
  { signUp }
)(renderedForm);
