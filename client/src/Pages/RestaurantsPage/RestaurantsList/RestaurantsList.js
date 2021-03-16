import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantsList = () => {
  const restaurants = [
    {
      id: 1,
      name: "Pankys Pastry Shop",
      foodCategory: "Desserts, Snacks",
      image:
        "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.0,
      deliveryTime: 39,
      costForTwo: 200,
    },
    {
      id: 2,
      name: "Bikanerwala",
      foodCategory: "Chinese, North Indian",
      image:
        "https://images.unsplash.com/photo-1587033649720-6850605eb2f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1018&q=80",
      rating: 4.3,
      deliveryTime: 29,
      costForTwo: 550,
    },
    {
      id: 3,
      name: "O'Biryani",
      foodCategory: "Biryani",
      image:
        "https://images.unsplash.com/photo-1542367592-8849eb950fd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
      rating: 3.5,
      deliveryTime: 25,
      costForTwo: 250,
    },
    {
      id: 4,
      name: "Homely Special Tawa Prantha",
      foodCategory: "Indian",
      image:
        "https://images.unsplash.com/photo-1580064003296-29deb3521370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      rating: 4.1,
      deliveryTime: 54,
      costForTwo: 200,
    },
    {
      id: 5,
      name: "Pankys Pastry Shop",
      foodCategory: "Desserts, Snacks",
      image:
        "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      rating: 4.0,
      deliveryTime: 39,
      costForTwo: 200,
    },
    {
      id: 6,
      name: "Bikanerwala",
      foodCategory: "Chinese, North Indian",
      image:
        "https://images.unsplash.com/photo-1587033649720-6850605eb2f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1018&q=80",
      rating: 4.3,
      deliveryTime: 29,
      costForTwo: 550,
    },
    {
      id: 7,
      name: "O'Biryani",
      foodCategory: "Biryani",
      image:
        "https://images.unsplash.com/photo-1542367592-8849eb950fd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
      rating: 3.5,
      deliveryTime: 25,
      costForTwo: 250,
    },
    {
      id: 8,
      name: "Homely Special Tawa Prantha",
      foodCategory: "Indian",
      image:
        "https://images.unsplash.com/photo-1580064003296-29deb3521370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      rating: 4.1,
      deliveryTime: 54,
      costForTwo: 200,
    },
  ];
  return (
    <div className="container pt-4">
      <div className="px-4">
        <h3>150 Restaurants</h3>
        <div className="row">
          {restaurants.map(restaurant => (
            <div className="col" key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsList;
