import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";

function Register() {
  const [formValues, setFormValues] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [formErrs, setFormErrs] = useState({
    nameErr: null,
    usernameErr: null,
    emailErr: null,
    passwordErr: null,
    confirm_passwordErr: null,
  });
  const [view, setView] = useState(false);

  const patterns = {
    email: /^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/,
    password: /^[\d\w@-]{8,20}$/i,
  };
  const noSpaces = /^\S*$/;

  let handleformChanges = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    setFormErrs({
      ...formErrs,
      [event.target.name + "Err"]:
        event.target.value.length === 0 ? "this field is required" : null,
    });
    // console.log(formErrs);
    console.log(formValues);
    // console.log("con", patterns.email.test(formValues.email));
  };
  const showData = () => {
    console.log(formValues);
  };

  return (
    <>
      <Form className="mt-5">
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="exampleForm.ControlInput3"
        >
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              onKeyUp={(e) => handleformChanges(e)}
              placeholder="fullname"
              name="fullname"
            />
            {formErrs.nameErr !== null ? (
              <p className="text-danger">{formErrs.nameErr}</p>
            ) : (
              ""
            )}
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="exampleForm.ControlInput3"
        >
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              onKeyUp={(e) => handleformChanges(e)}
              placeholder="username"
              name="username"
              required
            />
            {noSpaces.test(formValues.username) &&
            formErrs.usernameErr === null ? (
              ""
            ) : (
              <p className="text-danger">
                username shouldn't have any spaces and is required
              </p>
            )}
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label column sm="2">
            Email address
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              onKeyUp={(e) => handleformChanges(e)}
            />
            {patterns.email.test(formValues.email) &&
            formErrs.emailErr === null ? (
              ""
            ) : (
              <p className="text-danger">
                email is invalid it should be like name@example.com
              </p>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type={view ? "text" : "password"}
              name="password"
              placeholder="Password"
              onKeyUp={(e) => handleformChanges(e)}
            />
            {patterns.password.test(formValues.password) &&
            formErrs.passwordErr === null ? (
              ""
            ) : (
              <p className="text-danger">
                passowrd is invalid it should be min 8
              </p>
            )}
          </Col>
        </Form.Group>
        <div
          onClick={() => (view ? setView(false) : setView(true))}
          style={{ cursor: "pointer" }}
        >
          {view ? (
            <i className="fa-solid fa-eye"></i>
          ) : (
            <i className="fa-solid fa-eye-slash"></i>
          )}
        </div>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formPlaintextPassword2"
        >
          <Form.Label column sm="2">
            Confirm Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type={view ? "text" : "password"}
              name="confirm_password"
              placeholder="Password"
              onKeyUp={(e) => handleformChanges(e)}
            />
            {formValues.password === formValues.confirm_password ? (
              ""
            ) : (
              <p className="text-danger">write your password again</p>
            )}
          </Col>
        </Form.Group>
        {!formErrs.nameErr &&
        !formErrs.usernameErr &&
        !formErrs.emailErr &&
        !formErrs.passwordErr &&
        !formErrs.confirm_passwordErr ? (
          <Button variant="contained" onClick={showData}>
            submit
          </Button>
        ) : (
          <Button variant="contained" disabled>
            submit
          </Button>
        )}
      </Form>
    </>
  );
}

export default Register;
