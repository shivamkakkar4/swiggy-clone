import React from "react";
import RestaurantsCollections from "./RestaurantsCollections/RestaurantsCollections";
import RestaurantsList from "./RestaurantsList/RestaurantsList";

const RestaurantsPage = () => {
  return (
    <>
      <RestaurantsCollections />
      <RestaurantsList />
    </>
  );
};

export default RestaurantsPage;
