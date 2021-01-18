import React from "react";
import { Input, Drawer, Form } from "antd";
import SignupImage from "./Images/Upper/login-image.png";

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
                or{" "}
                <span
                  style={{
                    color: "#FC8019",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  login to your account
                </span>
              </div>
            </div>
            <div className="col-6">
              <img
                src={SignupImage}
                style={{ height: "100px", width: "105px" }}
              />
            </div>
          </div>
          <Form className="mt-5" layout="vertical">
            <Form.Item noStyle="true">
              <Input
                placeholder="Phone number"
                style={{
                  width: "362px",
                  height: "72px",
                  padding: "0 28px",
                  fontSize: "17px",
                }}
              />
            </Form.Item>
            <Form.Item noStyle="true">
              <Input
                placeholder="Name"
                style={{
                  width: "362px",
                  height: "72px",
                  padding: "0 28px",
                  fontSize: "17px",
                }}
              />
            </Form.Item>
            <Form.Item noStyle="true">
              <Input
                placeholder="Email"
                type="email"
                style={{
                  width: "362px",
                  height: "72px",
                  padding: "0 28px",
                  fontSize: "17px",
                }}
              />
            </Form.Item>
            <Form.Item>
              <Input.Password
                placeholder="Password"
                style={{
                  width: "362px",
                  height: "72px",
                  padding: "0 28px",
                  fontSize: "17px",
                }}
              />
            </Form.Item>
            <p
              style={{
                color: "#5d8ed5",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Have a referral code ?
            </p>
            <button
              style={{
                backgroundColor: "#fc8019",
                color: "#ffffff",
                width: "362px",
                height: "50px",
                padding: "0 28px",
                fontSize: "14px",
                border: "none",
                fontWeight: "bold",
              }}
            >
              CONTINUE
            </button>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default Signup;
