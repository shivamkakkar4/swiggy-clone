import React from "react";
import Header from "./Header";
import Middle from "./Middle";
import RestaurantsList from "./RestaurantsList";

const Restaurants = () => {
  return (
    <div>
      <Header />
      <Middle />
      <RestaurantsList />
    </div>
  );
};

export default Restaurants;