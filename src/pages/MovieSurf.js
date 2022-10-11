import React, { useState } from "react";
import { Container, Accordion } from "react-bootstrap";

const MovieSurf = () => {
  return (
    <Container className="MovieSurf_style">
      <div className="MovieSurf_style_center">
        <div>
          <img
            className="MovieSurf_style_img"
            width={250}
            src="https://images.pexels.com/photos/13761717/pexels-photo-13761717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div className="MovieSurf_style_text">
          <div className="MovieSurf_style_main">Movie Surf🏄‍♀️</div>
          <Accordion className="accordion" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>HTML/css</Accordion.Header>
              <Accordion.Body>
                html css는 쉽다.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>React</Accordion.Header>
              <Accordion.Body>
                react는 조금 알것같다.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Redux</Accordion.Header>
              <Accordion.Body>
                Redux는 헷갈리는데 재밌다.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </Container>
  );
};

export default MovieSurf;
