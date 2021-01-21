/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Input, Drawer, Form } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { hideLogin, showSignup } from "../../redux/actions/actions";
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

const Login = props => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const nextForm = e => {
    document.getElementById("loginForm1").style.display = "none";
    document.getElementById("loginForm2").style.display = "block";
    form2.setFieldsValue({
      Phone: phoneNumber,
    });
  };
  const revert = () => {
    document.getElementById("loginForm1").style.display = "block";
    document.getElementById("loginForm2").style.display = "none";
  };
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [otp, setOtp] = useState(0);

  const phoneChange = e => {
    setPhoneNumber(e.target.value);
  };

  const otpChange = e => {
    setOtp(e.target.value);
  };

  useEffect(() => {
    console.log(phoneNumber);
  });

  return (
    <>
      <Drawer
        placement="right"
        width="580"
        closable={true}
        onClose={() => {
          props.hideLogin();
          revert();
          form.resetFields();
          form2.resetFields();
        }}
        visible={props.visible}
      >
        <div className="mt-4 p-3" id="loginForm1">
          <div className="row">
            <div className="col-6">
              <h2>Login</h2>
              <div>
                or{" "}
                <SignupLink>
                  <a
                    onClick={() => {
                      props.hideLogin();
                      props.showSignup();
                    }}
                  >
                    create an account
                  </a>
                </SignupLink>
              </div>
            </div>
            <div className="col-6">
              <Image src={LoginImage} />
            </div>
          </div>
          <Form
            className="mt-5"
            layout="vertical"
            form={form}
            name="control-hooks"
            onFinish={nextForm}
          >
            <Form.Item
              name="Phone"
              rules={[{ required: true, message: "Enter your phone number" }]}
            >
              <Input
                className="no-arrow"
                onChange={phoneChange}
                type="number"
                placeholder="Phone number"
                style={inputStyle}
              />
            </Form.Item>
            <Form.Item>
              <LoginButton id="loginButton" type="submit">
                LOGIN
              </LoginButton>
            </Form.Item>
          </Form>
        </div>

        <div className="mt-4 p-3" id="loginForm2" style={{ display: "none" }}>
          <div className="row">
            <div className="col-6">
              <h2>Enter OTP</h2>
              <p>We've sent an OTP to your phone number.</p>
            </div>
            <div className="col-6">
              <Image src={LoginImage} />
            </div>
          </div>
          <Form className="mt-5" layout="vertical" form={form2}>
            <Form.Item name="Phone">
              <Input placeholder="Phone number" style={inputStyle} readOnly />
            </Form.Item>
            <Form.Item>
              <Input placeholder="One time password" style={inputStyle} />
            </Form.Item>
            <Form.Item>
              <LoginButton onChange={otpChange} id="verifyButton">
                Verify OTP
              </LoginButton>
            </Form.Item>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

const mapStateToProps = state => ({
  visible: state.reducer.loginvisible,
});

export default connect(mapStateToProps, { hideLogin, showSignup })(Login);
