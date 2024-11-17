import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <>
      {/* Card */}
      <div className="featured-card">
        <div className="featured-card-image">
          <Image
            src="/Rectangle 30.png"
            alt="work-image"
            width={246}
            height={180}
            className="rounded-md"
          />
        </div>

        {/* Featured works card's content container */}
        <div className="featured-card-content">
          <h2>Designing Dashboards</h2>
          <div className="featured-card-middle-content">
            <span>2020</span>
            <p>Dashboard</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="featured-card">
        <div className="featured-card-image">
          <Image
            src="/Rectangle 32.png"
            alt="work-image"
            width={246}
            height={180}
            className="rounded-md"
          />
        </div>

        {/* Featured works card's content container */}
        <div className="featured-card-content">
          <h2>Designing Dashboards</h2>
          <div className="featured-card-middle-content">
            <span>2020</span>
            <p>Dashboard</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="featured-card">
        <div className="featured-card-image">
          <Image
            src="/Rectangle 34.png"
            alt="work-image"
            width={246}
            height={180}
            className="rounded-md"
          />
        </div>

        {/* Featured works card's content container */}
        <div className="featured-card-content">
          <h2>Designing Dashboards</h2>
          <div className="featured-card-middle-content">
            <span>2020</span>
            <p>Dashboard</p>
          </div>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
