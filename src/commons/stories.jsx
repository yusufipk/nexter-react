import React from "react";

import story1 from "../commons/img/story-1.jpeg";
import story2 from "../commons/img/story-2.jpeg";

export default function Stories() {
  return (
    <React.Fragment>
      <div className="story__pictures">
        <img
          src={story1}
          alt="Copule with new house"
          className="story__img--1"
        />
        <img
          src={story2}
          alt="Copule with new house"
          className="story__img--2"
        />
      </div>
      <div className="story__content">
        <h3 className="heading-3 mb-sm">Happy Customers</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className="story__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className="btn">Find your own home</button>
      </div>
    </React.Fragment>
  );
}
