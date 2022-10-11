import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const MainPage = () => {
  const [position, setPosition] = useState(0);
  const onScroll = () => {
    setPosition(window.scrollY);
    // console.log(window.scrollY)
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  return (
    <Container className="Main_Container">
      <div className="MainPage_style">
        <h1 style={{opacity:(position-30)/100}}>Frontend Engineer</h1>
        <h1>Interaction Design Engineer</h1>
        <h1>Web Master</h1>
        <h1>를 꿈꾸는 '사랑'입니다😘</h1>
      </div>
    </Container>
  );
};

export default MainPage;
