import React from "react";
import { Field, reduxForm } from "redux-form";

const options = ["Side", "Main Course"];

class MenuCreate extends React.Component {
  renderInput = ({ input, type, value, meta, onChange }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={className}>
        <input
          {...input}
          type={type}
          value={value}
          autoComplete="off"
          onChange={e => {
            this.handleChange(e.target.files[0]);
          }}
        />
      </div>
    );
  };

  onSubmit = formValues => {
    console.log("I am submitting with these", formValues);
  };

  handleChange = image => {
    console.log("I am being called with an event", image);

    const formData = new FormData();
    formData.append("image", image, image.name);
  };

  render() {
    return (
      <form
        className="ui form "
        onSubmit={this.props.handleSubmit(this.onSubmit)}
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
              component="input"
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
              component="input"
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
                name="picture"
                component={this.renderInput}
                type="file"
                value={null}
              />
            </div>
          </div>
          <button
            style={{ marginTop: "20px" }}
            className="ui center button primary"
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

export default reduxForm({
  form: "MenuCreate"
})(MenuCreate);
