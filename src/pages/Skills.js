import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills_text">SKILL LEVEL</div>
      <div className="skills_style">
        <div>
          <img
            width={250}
            src="https://images.pexels.com/photos/13772907/pexels-photo-13772907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div>Develope Cording skills</div>
        </div>
        <div>
          <img
            width={250}
            src="https://images.pexels.com/photos/13522093/pexels-photo-13522093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div>Design skills</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
