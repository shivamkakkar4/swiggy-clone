/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Input, Drawer, Form } from "antd";
import { connect } from "react-redux";
import { hideSignup, showLogin } from "../../redux/actions/actions";
import SignupImage from "./Images/Upper/login-image.png";
import styled from "styled-components";

const ContinueButton = styled.button`
  background-color: #fc8019;
  color: #ffffff;
  width: 362px;
  height: 50px;
  padding: 0 28px;
  font-size: 14px;
  border: none;
  font-weight: bold;
`;

const Image = styled.img`
  height: 100px;
  width: 105px;
`;

const Referral = styled.p`
  color: #5d8ed5;
  font-weight: bold;
  cursor: pointer;
`;

const LoginLink = styled.span`
  color: #fc8019;
  font-weight: bold;
  cursor: pointer;
`;

const inputStyle = {
  width: "362px",
  height: "72px",
  padding: "0 28px",
  fontSize: "17px",
};

const Signup = props => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const nextForm = () => {
    document.getElementById("signupForm1").style.display = "none";
    document.getElementById("signupForm2").style.display = "block";
    form2.setFieldsValue({
      Phone: phoneNumber,
    });
  };
  const revert = () => {
    document.getElementById("signupForm1").style.display = "block";
    document.getElementById("signupForm2").style.display = "none";
  };

  const showReferral = () => {
    document.getElementById("referralInput").style.display = "block";
    document.getElementById("referral").style.display = "none";
  };

  const [phoneNumber, setPhoneNumber] = useState(0);
  const change = e => {
    setPhoneNumber(e.target.value);
  };
  return (
    <>
      <Drawer
        placement="right"
        width="580"
        closable={true}
        onClose={() => {
          props.hideSignup();
          revert();
          form.resetFields();
          form2.resetFields();
        }}
        visible={props.visible}
      >
        <div className="mt-4 p-3" id="signupForm1">
          <div className="row">
            <div className="col-6">
              <h2>Sign up</h2>
              <div>
                or{" "}
                <LoginLink>
                  <a
                    onClick={() => {
                      props.showLogin();
                      props.hideSignup();
                    }}
                  >
                    login to your account
                  </a>
                </LoginLink>
              </div>
            </div>
            <div className="col-6">
              <Image src={SignupImage} />
            </div>
          </div>
          <Form
            className="mt-5"
            layout="vertical"
            scrollToFirstError
            form={form}
            name="control-hooks"
            onFinish={nextForm}
          >
            <Form.Item
              name="Phone2"
              // noStyle="true"
              rules={[{ required: true, message: "Enter your phone number" }]}
            >
              <Input
                className="no-arrow"
                onChange={change}
                type="number"
                placeholder="Phone number"
                style={inputStyle}
              />
            </Form.Item>
            <Form.Item
              name="Name"
              //  noStyle="true"
              rules={[{ required: true, message: "Enter your Name" }]}
            >
              <Input placeholder="Name" style={inputStyle} />
            </Form.Item>
            <Form.Item
              // noStyle="true"
              name="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="Email" style={inputStyle} />
            </Form.Item>
            <Form.Item
              name="Password"
              minLength="6"
              rules={[
                {
                  minLength: "6",
                  message: "Password should be minimum 6 characters",
                },
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" style={inputStyle} />
            </Form.Item>
            <Referral id="referral">
              <a onClick={showReferral}>Have a referral code ?</a>
            </Referral>
            <div style={{ display: "none" }} id="referralInput">
              <Form.Item
                // noStyle="true"
                name="ReferralCode"
              >
                <Input placeholder="Referral Code" style={inputStyle} />
              </Form.Item>
            </div>
            <ContinueButton type="submit" id="continueButton">
              CONTINUE
            </ContinueButton>
          </Form>
        </div>

        <div className="mt-4 p-3" id="signupForm2" style={{ display: "none" }}>
          <div className="row">
            <div className="col-6">
              <h2>Sign up</h2>
              <div>
                or{" "}
                <LoginLink>
                  <a
                    onClick={() => {
                      props.showLogin();
                      props.hideSignup();
                    }}
                  >
                    login to your account
                  </a>
                </LoginLink>
              </div>
            </div>
            <div className="col-6">
              <Image src={SignupImage} />
            </div>
          </div>
          <Form className="mt-5" layout="vertical" form={form2}>
            <Form.Item name="Phone">
              <Input placeholder="Phone number" style={inputStyle} readOnly />
            </Form.Item>
            <div>
              <Form.Item>
                <Input placeholder="One time password" style={inputStyle} />
              </Form.Item>
            </div>
            <ContinueButton>Verify OTP</ContinueButton>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

const matchStateToProps = state => ({
  visible: state.reducer.signupvisible,
});

export default connect(matchStateToProps, { hideSignup, showLogin })(Signup);
