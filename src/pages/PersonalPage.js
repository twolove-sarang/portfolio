import React from "react";
import { Container } from "react-bootstrap";

const PersonalPage = () => {
  return (
    <div className="personalPage">
      <div className="personalpage_welcome">Welcome To My Special Space</div>
      <div className="PersonalPages_style">
        <div>
          <a href="https://github.com/twolove-sarang">
            <img
              width={250}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
          </a>
          <div>Github</div>
        </div>
        <div>
          <a href="https://danzo999.blogspot.com/">
            <img
              width={250}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1200px-Blogger.svg.png"
            />
          </a>
          <div>Blog</div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
