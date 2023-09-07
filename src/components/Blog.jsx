import React from "react";
import "../styleComponents/sass/_Blog.scss";
import BlogCardImg1 from "../assets/laptop-man-2.jpg";
import BlogCardImg2 from "../assets/mans-3.jpg";
import BlogCardImg3 from "../assets/girl-boy.jpg";
import { BsArrowRightShort } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="Blog">
     <a id="blog"></a>
      <div className="blog-txt">
        <h1>BLOG</h1>
        <hr />
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean class at a euismod mus ipsum vel ex
          finibus semper luctus quam.
        </p>
      </div>

      <div className="blog-cards">
        <div className="cards">
          <img src={BlogCardImg1} alt="BlogCard-Pic-1" />
          <h1>UI & UX Design</h1>
          <h2>Doing a cross country road trip</h2>
          <p>
            She packed her seven versalia, put her initial into the belt and
            made herself on the way..
          </p>
          <span>
            Read More <BsArrowRightShort className="icon"/>
          </span>
        </div>
        <div className="cards">
          <img src={BlogCardImg2} alt="BlogCard-Pic-2" />
          <h1>Digital Marketing</h1>
          <h2>New exhibition at our Museum</h2>
          <p>
            Pityful a rethoric question ran over her cheek, then she continued
            her way.
          </p>
          <span>
            Read More <BsArrowRightShort className="icon" />
          </span>
        </div>
        <div className="cards">
          <img src={BlogCardImg3} alt="BlogCard-Pic-3" />
          <h1>Travelling</h1>
          <h2>Why are so many people..</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
          <span>
            Read More <BsArrowRightShort className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
