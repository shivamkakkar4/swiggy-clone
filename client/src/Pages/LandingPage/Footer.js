import React from "react";
import playStore from "./Images/Footer/playStore.png";
import appStore from "./Images/Footer/appStore.png";
import logo from "./Images/Footer/logo.png";
import Facebook from "./Images/Footer/Facebook.png";
import Instagram from "./Images/Footer/Instagram.png";
import Twitter from "./Images/Footer/Twitter.png";
import pinInterest from "./Images/Footer/pinInterest.png";
import styled from "styled-components";
const Footer = () => {
  const footer = {
    background: "black",
    paddingTop: "3%",
    paddingBotttom: "3%",
    paddingLeft: "4%",
    paddingRight: "4%",
  };

  const Head = styled.p`
    font: 15px;
    color: #808080;
    font-family: Arial, Helvetica, sans-serif;
  `;

  const UL = styled.ul`
    list-style-type: none;
    padding-left: 0;
  `;
  const Link = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
      color: white;
      font-weight: 600;
    }
  `;
  const Hr = styled.hr`
    color: white;
  `;
  const Social = styled.img`
    height: 25px;
    width: 25px;
    padding: 1px;
    margin-left: 1rem;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `;
  const GetApp = styled.img`
    height: 65px;
    width: 200px;
    transition: 0.5s;
    margin: 0.4rem;
    text-align: center;
    &:hover {
      transform: scale(1.1);
    }
  `;

  const CopyRight = styled.p`
    font-size: 20px;
    color: white;
  `;

  return (
    <>
      <div className="container-fluid" style={footer}>
        <div className="row">
          <div className="col-sm">
            <Head>COMPANY</Head>
            <UL style={{ listStyle: "none" }}>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="http://">Team</Link>
              </li>
              <li>
                <Link href="http://">Career</Link>{" "}
              </li>
              <li>
                <Link href="http://">Swiggy Blog</Link>
              </li>
              <li>
                <Link href="http://"> Bug Bounty</Link>
              </li>
              <li>
                <Link href="http://">Swiggy Super</Link>
              </li>
              <li>
                <Link href="http://">Swiggy Corporate</Link>
              </li>
            </UL>
          </div>
          <div className="col-sm">
            <Head>CONTACT</Head>
            <UL>
              <li>
                <Link href="http://">Help & Support</Link>
              </li>
              <li>
                <Link href="http://">Partner With Us</Link>
              </li>
              <li>
                <Link href="http://">Ride Us</Link>
              </li>
            </UL>
          </div>
          <div className="col-sm">
            <Head>LEGAL</Head>
            <UL>
              <li>
                <Link href="http://">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="http://">Refund & Cancellation</Link>
              </li>
              <li>
                <Link href="http://">Privacy Policy</Link>
              </li>
              <li>
                <Link href="http://">Cookie Policy</Link>
              </li>
              <li>
                <Link href="http://">Offer Terms</Link>
              </li>
            </UL>
          </div>
          <div className="col-sm ">
            <div className="row text-center">
              <a href="http://">
                <GetApp src={playStore}></GetApp>
              </a>
            </div>
            <br />
            <div className="row text-center">
              <a href="http://">
                <GetApp src={appStore}></GetApp>
              </a>
            </div>
          </div>
        </div>

        <Hr />

        <Head>We Deliver To</Head>
        <br />
        <div className="row">
          <div className="col-sm">
            <UL>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
            </UL>
          </div>
          <div className="col-sm">
            <UL>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
            </UL>
          </div>
          <div className="col-sm">
            <UL>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
            </UL>
          </div>
          <div className="col-sm">
            <UL>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
              <li>
                <Link href="http://">About Us</Link>{" "}
              </li>
            </UL>
          </div>
        </div>

        <Hr />
        <div className="row">
          <div className="col-4">
            <Link href="/">
              <img src={logo} width="142" alt="" />
            </Link>
          </div>
          <div className="col-4 text-center">
            <CopyRight>©2021 Swiggy</CopyRight>
          </div>
          <div className="col-4 text-end">
            <a href="http://">
              <Social src={Facebook}></Social>
            </a>
            <a href="http://">
              <Social src={pinInterest}></Social>
            </a>
            <a href="http://">
              <Social src={Instagram}></Social>
            </a>
            <a href="http://">
              <Social src={Twitter}></Social>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
