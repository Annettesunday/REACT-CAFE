import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createImageUrl, createMenu } from "../../actions";

const options = ["Side", "Main Course"];

class MenuForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="error">{error}</div>
        </div>
      );
    }
  };
  renderInput = ({ input, type, value, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    const markup =
      type === "file" ? (
        <input
          {...input}
          type={type}
          value={value}
          autoComplete="off"
          onChange={e => this.handleChange(e.target.files[0])}
        />
      ) : (
        <input {...input} autoComplete="off" type={type} />
      );

    return (
      <div className={className}>
        {markup}
        {this.renderError(meta)}
      </div>
    );
  };

  handleChange = image => {
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.createImageUrl(formData);
  };

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <div>
          <label>Type</label>
          <div>
            <Field name="type" component="select">
              <option value="">Select Menu Option...</option>
              {options.map(menuOption => {
                return (
                  <option value={menuOption} key={menuOption}>
                    {menuOption}
                  </option>
                );
              })}
            </Field>
          </div>
        </div>
        <div>
          <label>Name</label>
          <div>
            <Field
              name="name"
              component={this.renderInput}
              type="text"
              autoComplete="off"
            />
          </div>
        </div>
        <div>
          <label>Price</label>
          <div>
            <Field
              name="price"
              component={this.renderInput}
              autoComplete="off"
              type="number"
            />
          </div>
        </div>
        <div>
          <div>
            <label>Photo</label>
            <div>
              <Field
                name="menuImage"
                component={this.renderInput}
                type="file"
                value={null}
              />
            </div>
            {this.props.menu.menuImage ? (
              <div>
                <img
                  src={this.props.menu.menuImage}
                  alt="menuImage"
                  style={{ maxWidth: "10%" }}
                />
              </div>
            ) : null}
          </div>
          <button
            style={{ marginTop: "20px" }}
            className="ui button primary"
            type="submit"
            disabled={this.props.submitting}
          >
            {this.props.submitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const name = formValues.name;
  const price = formValues.price;
  const type = formValues.type;
  const picture = formValues.picture;

  const errors = {};

  if (!name) {
    errors.name = "Field must not be empty";
  }
  if (!price) {
    errors.price = "Field must not be empty";
  }
  if (!type) {
    errors.type = "You some select a type";
  }

  if (picture && picture.length === 0) {
    errors.picture = "Field must not be empty";
  }

  return errors;
};

const renderedForm = reduxForm({
  form: "MenuForm",
  validate,
  enableReinitialize: true
})(MenuForm);

const mapStateToProps = state => {
  return {
    imageUrl: state.imageUrl,
    menu: state.menus,
    initialValues: state.menus
  };
};

export default connect(
  mapStateToProps,
  { createImageUrl, createMenu }
)(renderedForm);
