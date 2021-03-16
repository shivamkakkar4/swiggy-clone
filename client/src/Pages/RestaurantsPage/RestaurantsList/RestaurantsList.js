import React from "react";
import styled from "styled-components";
import topPicks from "./Images/topPicks.png";
import topPicksActive from "./Images/topPicksActive.png";
import WhatNew from "./Images/WhatNew.png";
import seeAll from "./Images/seeAll.png";
import onlyOnSwiggy from "./Images/onlyOnSwiggy.png";
import vegetarianOptions from "./Images/vegetarianOptions.png";

const RestaurantsList = () => {
  const Left = styled.div`
    height: 60vh;
    padding: 0 10px 0 0;
    position: sticky;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 8px 0 rgba(0, 0, 0, 0.1);
  `;

  const List = styled.a`
    color: #535665;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
    border: none;
    height: 100%;
    width: 100%;
    transition: color 0.25s;
    &:hover {
      color: #e46d47;
    }
    &:hover span {
      color: #e46d47;
    }
    &:hover img {
      transform: scale(1.2);
    }
    &:active {
      background-color: #e46d47;
      color: white;
    }
  `;

  const Icon = styled.img`
    height: 45px;
    width: 45px;
    margin: 0 0.7rem;
    transition: transform 0.4s;
    &:hover {
      transform: scale(1.2);
    }
  `;

  const SmallText = styled.span`
    color: #535665;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    display: block;
    margin: 2px 0px 0px;
    position: relative;
    left: 30%;
  `;

  return (
    <div className="container-fluid" style={{ padding: "0 20px", border: "1px solid black" }}>
      <div className="row">
        <Left className="col-3">
          <div className="list-group">
            <List href="#" className="list-group-item list-group-item-action">
              <Icon src={topPicks} alt=""></Icon>
              Top Picks
              <SmallText>71 options</SmallText>
            </List>
            <List href="#" className="list-group-item list-group-item-action">
              <Icon src={WhatNew} alt=""></Icon>
              Whats's New
              <SmallText>71 options</SmallText>
            </List>
            <List href="#" className="list-group-item list-group-item-action">
              <Icon src={onlyOnSwiggy} alt=""></Icon>
              Only On Swiggy
              <SmallText>71 options</SmallText>
            </List>
            <List href="#" className="list-group-item list-group-item-action">
              <Icon src={vegetarianOptions} alt=""></Icon>
              Vegetarian Options
              <SmallText>71 options</SmallText>
            </List>
            <List href="#" className="list-group-item list-group-item-action">
              <Icon src={seeAll} alt=""></Icon>
              See All
              <SmallText>71 options</SmallText>
            </List>
          </div>
        </Left>
        <div className="col-9">right</div>
      </div>
    </div>
  );
};

export default RestaurantsList;
