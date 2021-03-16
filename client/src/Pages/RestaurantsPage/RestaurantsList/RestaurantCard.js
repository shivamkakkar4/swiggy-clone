import React from "react";
import { Card } from "./styles";
import { StarFilled } from "@ant-design/icons";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card className="card border-light mb-3 mx-2">
      <img
        style={{ height: "160px" }}
        src={restaurant.image}
        className="card-img-top"
        alt="..."
        className="mb-2"
      />
      <h4 style={{ fontSize: "17px" }} className="card-title">
        {restaurant.name}
      </h4>
      <p className="card-text" style={{ fontSize: "13px" }}>
        {restaurant.foodCategory}
      </p>
      <div className="d-flex justify-content-between mb-3">
        {/* <p className="py-2" style={{ backgroundColor: "green" }}>
          <StarOutlined style={{}} /> <span style={{ fontSize: "12px" }}>4.0</span>
        </p> */}
        <span
          className="p-1"
          style={{ backgroundColor: "#48C479", color: "white", fontSize: "12px" }}
        >
          <StarFilled style={{ float: "left" }} />{" "}
          <span style={{ float: "left" }}>{restaurant.rating}</span>
        </span>
        <span style={{ fontWeight: "bold" }}>.</span>
        <span style={{ fontSize: "12px" }}>{restaurant.deliveryTime}MINS</span>
        <span style={{ fontWeight: "bold" }}>.</span>
        <span style={{ fontSize: "12px" }}>₹{restaurant.costForTwo} FOR TWO</span>
      </div>
    </Card>
  );
};

export default RestaurantCard;
