import React from "react";
import { Input, Drawer, Form } from "antd";
import LoginImage from "./Images/Upper/login-image.png";
import styled from "styled-components";

const LoginButton = styled.button`
  background-color: #fc8019;
  color: #ffffff;
  width: 362px;
  height: 50px;
  padding: 0 28px;
  font-size: 14px;
  border: none;
  font-weight: bold;
`;

const SignupLink = styled.span`
  color: #fc8019;
  font-weight: bold;
  cursor: pointer;
`;

const Image = styled.img`
  height: 100px;
  width: 105px;
`;

const inputStyle = {
  width: "362px",
  height: "72px",
  padding: "0 28px",
  fontSize: "17px",
};

const Login = ({ onClose, visible }) => {
  return (
    <>
      <Drawer
        placement="right"
        width="580"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <div className="mt-4 p-3">
          <div className="row">
            <div className="col-6">
              <h2>Login</h2>
              <div>
                or <SignupLink>create an account</SignupLink>
              </div>
            </div>
            <div className="col-6">
              <Image src={LoginImage} />
            </div>
          </div>
          <Form className="mt-5" layout="vertical">
            <Form.Item>
              <Input placeholder="Phone number" style={inputStyle} />
            </Form.Item>
            <LoginButton>LOGIN</LoginButton>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default Login;
