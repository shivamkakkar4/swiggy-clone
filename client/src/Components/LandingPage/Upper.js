import React, { useState } from "react";
import {
  UpperContainer,
  Container,
  FirstSection,
  Logo,
  SideImage,
  Title,
  Subtitle,
  CustomButton,
  Subtitle2,
  UL,
  Card,
  CardImage,
  ThirdSection,
  ThirdContainer,
  Title2,
  AppStoreIcon,
  MobileImage1,
  MobileImage2,
} from "./UpperStyledComponents";
import logo from "./Images/Upper/Swiggy-Logo.png";
import Sec2_1 from "./Images/Upper/Sec2_1.png";
import Sec2_2 from "./Images/Upper/Sec2_2.png";
import Sec2_3 from "./Images/Upper/Sec2_3.png";
import Mobile1 from "./Images/Upper/Sec3_1.png";
import Mobile2 from "./Images/Upper/Sec3_2.png";
import PlayStore from "./Images/Upper/playStore.png";
import AppStore from "./Images/Upper/appStore.png";
import "antd/dist/antd.css";
import { Input } from "antd";
import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";

const Upper = () => {
  const [loginvisible, setLoginVisible] = useState(false);
  const [signupvisible, setSignupVisible] = useState(false);

  const showLoginDrawer = () => {
    setLoginVisible(true);
  };
  const onLoginClose = () => {
    setLoginVisible(false);
  };

  const showSignupDrawer = () => {
    setSignupVisible(true);
  };
  const onSignupClose = () => {
    setSignupVisible(false);
  };
  return (
    <UpperContainer>
      <LoginContainer onClose={onLoginClose} visible={loginvisible} />
      <SignupContainer onClose={onSignupClose} visible={signupvisible} />

      <FirstSection className="row">
        <div className="col">
          <Container className="container">
            <Logo src={logo} />
            <CustomButton background="#ffffff" black onClick={showLoginDrawer}>
              Login
            </CustomButton>
            <CustomButton background="#000000" onClick={showSignupDrawer}>
              Sign up
            </CustomButton>
            <Title>Hungry ?</Title>
            <Subtitle>Order food from favourite restaurants near you.</Subtitle>
            <div style={{ marginBottom: 16 }}>
              <Input
                size="large"
                style={{
                  width: "30rem",
                  height: "60px",
                  border: "1px solid #fc8019",
                }}
                placeholder="Enter your delivery location"
              />
              <CustomButton large background="#fc8019">
                FIND FOOD
              </CustomButton>
            </div>
            <div>
              <Subtitle2>POPULAR CITIES IN INDIA</Subtitle2>
              <UL className="list-inline">
                <li className="list-inline-item font-weight-bold">Ahmedabad</li>
                <li className="list-inline-item font-weight-bold text-muted">
                  Bangalore
                </li>
                <li className="list-inline-item font-weight-bold">Chennai</li>
                <li className="list-inline-item font-weight-bold text-muted">
                  Delhi
                </li>
                <li className="list-inline-item font-weight-bold">Gurgaon</li>
                <li className="list-inline-item font-weight-bold text-muted">
                  Hyderabad
                </li>
                <li className="list-inline-item font-weight-bold">Kolkata</li>
                <li className="list-inline-item font-weight-bold text-muted">
                  Mumbai
                </li>
                <li className="list-inline-item font-weight-bold">Pune</li>
                <li className="list-inline-item font-weight-bold text-muted">
                  & more.
                </li>
              </UL>
            </div>
          </Container>
        </div>
        <div style={{ width: "45.55%" }}>
          <SideImage />
        </div>
      </FirstSection>
      {/* Second Section */}
      <div className="row">
        <div className="col-sm-4 p-0">
          <Card className="card">
            <CardImage
              className="card-img-top"
              src={Sec2_1}
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-white">No Minimum Order</h5>
              <div className="card-text text-white">
                Order in for yourself or for the group, with no restrictions on
                order value
              </div>
            </div>
          </Card>
        </div>
        <div className="col-sm-4 p-0">
          <Card className="card">
            <CardImage
              className="card-img-top"
              src={Sec2_2}
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-white">Live Order Tracking</h5>
              <div className="card-text text-white">
                Know where your order is at all times, from the restaurant to
                your doorstep
              </div>
            </div>
          </Card>
        </div>
        <div className="col-sm-4 p-0">
          <Card className="card">
            <CardImage
              className="card-img-top"
              src={Sec2_3}
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <h5 className="card-title text-white">Lightning-Fast Delivery</h5>
              <div className="card-text text-white">
                Experience Swiggy's superfast delivery for food delivered fresh
                & on time
              </div>
            </div>
          </Card>
        </div>
      </div>
      <ThirdSection className="row">
        <div className="col-5">
          <ThirdContainer className="card">
            <div className="card-body">
              <Title2 className="card-title">Restaurants in your pocket</Title2>
              <h5 className="card-subtitle mt-4 text-muted">
                Order from your favorite restaurants & track on the go, with the
                all-new Swiggy app.
              </h5>
              <div className="row" style={{ marginTop: "55px" }}>
                <div className="col-6">
                  <a
                    href="https://play.google.com/store/apps/details?id=in.swiggy.android"
                    target="blank"
                  >
                    <AppStoreIcon src={PlayStore} />
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"
                    target="blank"
                  >
                    <AppStoreIcon src={AppStore} />
                  </a>
                </div>
              </div>
            </div>
          </ThirdContainer>
        </div>
        <div className="col-7">
          <MobileImage1 src={Mobile1} />
          <MobileImage2 src={Mobile2} />
        </div>
      </ThirdSection>
    </UpperContainer>
  );
};

export default Upper;
