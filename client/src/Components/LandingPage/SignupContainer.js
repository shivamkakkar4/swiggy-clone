import React from "react";
import { Input, Drawer, Form } from "antd";
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

const Signup = ({ onClose, visible }) => {
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
              <h2>Sign up</h2>
              <div>
                or <LoginLink>login to your account</LoginLink>
              </div>
            </div>
            <div className="col-6">
              <Image src={SignupImage} />
            </div>
          </div>
          <Form className="mt-5" layout="vertical">
            <Form.Item noStyle="true">
              <Input placeholder="Phone number" style={inputStyle} />
            </Form.Item>
            <Form.Item noStyle="true">
              <Input placeholder="Name" style={inputStyle} />
            </Form.Item>
            <Form.Item noStyle="true">
              <Input placeholder="Email" type="email" style={inputStyle} />
            </Form.Item>
            <Form.Item>
              <Input.Password placeholder="Password" style={inputStyle} />
            </Form.Item>
            <Referral>Have a referral code ?</Referral>
            <ContinueButton>CONTINUE</ContinueButton>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default Signup;
