import styled from "styled-components";
import SideImg from "./Images/Upper/SideImage.jfif";

export const UpperContainer = styled.div`
  font-family: ProximaNova, Arial, "Helvetica Neue", sans-serif;
  overflow: hidden;
`;

export const Container = styled.div`
  margin-top: 7.5%;
  margin-left: 17.5%;
`;

export const FirstSection = styled.div`
  height: 540px;
  overflow: hidden;
`;

export const Logo = styled.img`
  height: 57px;
  margin-right: 27%;
`;

export const SideImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${SideImg});
  background-size: cover;
  background-position-x: 100%;
  background-position-y: center;
`;

export const Title = styled.p`
  color: #282c3f;
  margin: 65px 0 0 0;
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
`;

export const Subtitle = styled.p`
  color: #686b78;
  font-size: 24px;
  margin: 0 0 30px 0;
`;

export const Button = styled.button`
  background: ${props => props.background};
  color: ${props => (props.black ? "#000000" : "#ffffff")};
  padding: 0px 28px;
  font-size: 16px;
  border: none;
  font-weight: bold;
  height: ${props => (props.large ? "60px" : "40px")};
`;

export const Subtitle2 = styled.p`
  font-size: 15px;
  color: #a9abb2;
  margin-top: 25px;
  margin-bottom: 8px;
`;

export const UL = styled.ul`
  font-size: 16px;
  width: 80%;
`;

export const Card = styled.div`
  background-color: #2b1e16;
  height: 402px;
  border: 0;
  border-radius: 0;
  padding: 0 20%;
`;

export const CardImage = styled.img`
  height: 199px;
  width: 105px;
  align-self: center;
`;

export const ThirdSection = styled.div`
  height: 570px;
  padding: 0 8%;
`;

export const ThirdContainer = styled.div`
  margin-left: 4%;
  margin-top: 140px;
  width: 420px;
  border: 0;
`;

export const Title2 = styled.h1`
  padding-right: 80px;
  line-height: 40px;
  font-weight: bold;
`;

export const AppStoreIcon = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const MobileImage1 = styled.img`
  width: 384px;
  height: 489px;
  margin-top: -80px;
`;
export const MobileImage2 = styled.img`
  width: 384px;
  height: 489px;
  margin: 81px 0 0 -40px;
`;
