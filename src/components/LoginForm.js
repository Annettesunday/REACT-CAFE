import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { signIn } from "../actions";
import renderApiErrors from "../utils/renderApiErrors";

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
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => this.props.signIn(formValues);

  render() {
    const error = this.props.initialValues.newError;
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
        <button className="ui button primary" disabled={this.props.submitting}>
          {this.props.submitting ? "Submitting" : "Submit"}
        </button>
        <div className="ui error message" />
        {renderApiErrors(error)}
      </form>
    );
  }
}

const validate = formValues => {
  const email = formValues.email;
  const password = formValues.password;
  const errors = {};

  if (!email) {
    errors.email = "Field must not be empty";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Field must not be empty";
  } else if (password < 6) {
    errors.password = "Password must be more than 6 characters";
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    initialValues: state.errors
  };
};
const renderedForm = reduxForm({
  form: "LoginForm",
  validate,
  enableReinitialize: true
})(LoginForm);

export default connect(
  mapStateToProps,
  { signIn }
)(renderedForm);
