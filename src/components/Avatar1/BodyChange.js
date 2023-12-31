import Person from "src/assets/images/avatar/body/person_body.png";
import Cat from "src/assets/images/avatar/body/cat_body.png";
import Snowman from "src/assets/images/avatar/body/snowman_body.png";
import Kangaroo from "src/assets/images/avatar/body/kangaroo.png";
import Penquin from "src/assets/images/avatar/body/penguin_body.png";
import Rabbit from "src/assets/images/avatar/body/rabbit_body.png";
import RightRed from "src/assets/images/avatar/arrowRight_Red.png";
import LeftRed from "src/assets/images/avatar/arrowLeft_Red.png";

import "src/style/Avatar/Avatar.css";

import React, { useState, useEffect } from "react";

const BodyChange = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const images = [Cat, Person, Snowman, Kangaroo, Penquin, Rabbit];

  const handleSaveImage = () => {
    const selectedImage = images[currentIndex];
    localStorage.setItem("selectedImage", selectedImage);
    console.log("saved:", selectedImage);
    window.alert("몸 선택완료!");
  };

  useEffect(() => {
    const savedImage = localStorage.getItem("selectedImage");
    if (savedImage) {
      // Find the index of the saved image in the images array
      const savedIndex = images.findIndex((image) => image === savedImage);
      if (savedIndex !== -1) {
        setCurrentIndex(savedIndex);
      }
    }
  }, []);

  return (
    <div className="slider">
      <img
        className="SeeBody"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
      <div className="PickBody" onClick={handleSaveImage}>
        <img
          className="Body"
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      </div>

      <div>
        <img
          onClick={handleNext}
          src={RightRed}
          className="BodyRight "
          alt="오른쪽버튼"
        />
        <img
          onClick={handlePrevious}
          src={LeftRed}
          className="BodyLeft"
          alt="왼쪽버튼"
        />
      </div>
    </div>
  );
};

export default BodyChange;
