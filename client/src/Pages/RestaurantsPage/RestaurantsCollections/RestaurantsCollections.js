import React from "react";
import { MainContainer, Image } from "./styles";
import Image1 from "./Images/image1.jfif";
import Image2 from "./Images/image2.jfif";
import Image3 from "./Images/image3.png";
import Image4 from "./Images/image4.jfif";

const RestaurantsCollections = () => {
  return (
    <MainContainer>
      <div className="container">
        <div className="px-5 d-flex justify-content-between">
          <Image alt="Image1" src={Image1} />
          <Image alt="Image1" src={Image2} />
          <Image alt="Image1" src={Image3} />
          <Image alt="Image1" src={Image4} />
        </div>
      </div>
    </MainContainer>
  );
};

export default RestaurantsCollections;
