import Image from "next/image";
import Recentpostcard from "./components/Recentpostcard";
import Featuredcard from "@/app/components/Featuredcard";
export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Hi, I am John, <br /> Creative Technologist
            </h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <button className="resume-button">Download Resume</button>
          </div>

          <div className="hero-image">
            <Image
              src="/profile.png"
              alt="profile-image"
              width={292}
              height={299}
            />
          </div>
        </div>
      </section>

      {/* Recent post section */}
      <div className="recentpost">
        <div className="recentpost-container">
          <div className="recentpost-heading">
            <h2>Recent Posts</h2>
            <button>View all</button>
          </div>

          <div className="recentpost-card-container">

            {/* Recent post card */}
            <Recentpostcard />
            <Recentpostcard />

          </div>
        </div>
      </div>

      {/* Featured works */}
      <div className="featured-works">
        {/* Featured works main container */}
        <div className="featured-container">
          {/* Featured works heading */}
          <div className="featured-heading">
            <h2>Featured Works</h2>
          </div>

          {/* Featured works card container */}
          <div className="featured-card-container">

            {/* Featured works card */}
            <Featuredcard />
            
          </div>
        </div>
      </div>
    </>
  );
}
