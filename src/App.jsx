import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { FormSchema } from "./schema";
const App = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { handleSubmit, handleChange, values, errors, handleReset, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: FormSchema,
      onSubmit: (values) => {
        console.log(values);
        handleReset();
      },
    });
  return (
    <div className="container my-5 w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Name</Form.Label>
          <Form.Control
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
          />

          {errors.name && touched.name ? (
            <Form.Text className="form-errors">{errors.name}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <Form.Text className="form-errors">{errors.email}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <Form.Text className="form-errors">{errors.password}</Form.Text>
          ) : null}
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            id="confirm_password"
            name="confirm_password"
            type="password"
            placeholder="Confirm password"
            onChange={handleChange}
            value={values.confirm_password}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <Form.Text className="form-errors">
              {errors.confirm_password}
            </Form.Text>
          ) : null}
        </Form.Group>
        <Button variant="primary" className="mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default App;
