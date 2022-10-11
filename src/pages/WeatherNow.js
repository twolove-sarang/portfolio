import React from "react";
import { Accordion } from "react-bootstrap";

const WeatherNow = () => {
  return (
    
    <div className="WeatherNow_style">
      <div className="WeatherNow_style_center">
      <img
        className="WeatherNow_style_img"
          width={250}
          src="https://images.pexels.com/photos/12332765/pexels-photo-12332765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <div>
          <div className="weather_style_main">Weather Now 🌏</div>
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
              <Accordion.Header>Router</Accordion.Header>
              <Accordion.Body>
                Router는 유용하다.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
  
      </div>
    </div>
  );
};

export default WeatherNow;
