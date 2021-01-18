import React from "react";
import { Input, Drawer, Form } from "antd";
import LoginImage from "./Images/Upper/login-image.png";

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
                or{" "}
                <span
                  style={{
                    color: "#FC8019",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  create an account
                </span>
              </div>
            </div>
            <div className="col-6">
              <img
                src={LoginImage}
                style={{ height: "100px", width: "105px" }}
              />
            </div>
          </div>
          <Form className="mt-5" layout="vertical">
            <Form.Item>
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
              LOGIN
            </button>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default Login;
