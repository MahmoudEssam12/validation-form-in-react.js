import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Button } from "@mui/material";
function Login() {
  const [formsValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [validEmail, setValidEmail] = useState(false);
  const [validPass, setValidPass] = useState(false);

  const patterns = {
    email: /^([a-z\d.-]+)@([a-z\d-]+).([a-z]{2,8})(.[a-z]{2,8})?$/,
    password: /^[\d\w@-]{8,20}$/i,
  };

  useEffect(() => {
    if (patterns.email.test(formsValues.email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [formsValues.email, patterns.email]);

  useEffect(() => {
    if (patterns.password.test(formsValues.password)) {
      setValidPass(true);
    } else {
      setValidPass(false);
    }
  }, [formsValues.password, patterns.password]);

  const showData = () => {
    alert(`email:${formsValues.email} and u r in`);
  };
  return (
    <>
      <Form className="mt-5">
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
              onKeyUp={(e) =>
                setFormValues({
                  ...formsValues,
                  email: e.target.value,
                })
              }
            />
            {validEmail ? (
              <p className="text-success">valid Email</p>
            ) : (
              <p className="text-danger">invalid Email</p>
            )}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              onKeyUp={(e) =>
                setFormValues({
                  ...formsValues,
                  password: e.target.value,
                })
              }
            />
            {validPass ? (
              <p className="text-success">valid password</p>
            ) : (
              <p className="text-danger">invalid password</p>
            )}
          </Col>
        </Form.Group>
        {validPass && validEmail ? (
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

export default Login;
