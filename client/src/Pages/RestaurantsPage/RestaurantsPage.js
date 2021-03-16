import React from "react";
import Header from "../../Components/Header/Header";
import RestaurantsCollections from "./RestaurantsCollections/RestaurantsCollections";
import RestaurantsList from "./RestaurantsList/RestaurantsList";

const RestaurantsPage = () => {
  return (
    <>
      <Header />
      <RestaurantsCollections />
      <RestaurantsList />
    </>
  );
};

export default RestaurantsPage;
