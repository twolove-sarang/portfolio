import React from "react";
import UpandDown from "./UpandDown";
import Rock from "./Rock";
import Todolist from "./Todolist";
import { Link } from "react-router-dom";

const MiniGame = () => {
  return (
    <div className="Minigame_style">
      <div>MINI Project</div>
      <div>
        <div className="Card_style">
          <div>
            <UpandDown />
            <div>
              <a
                href="https://github.com/twolove-sarang/Up-Down-Game"
                target="_blank"
              >
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
              <a href="https://upanddowngame.netlify.app/" target="_blank">
                visit site
              </a>
            </div>
            <div>html/css, javascript</div>
          </div>
          <div>
            <Rock />
            <div>
              <a
                href="https://github.com/twolove-sarang/Up-Down-Game"
                target="_blank"
              >
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
              <a href="https://rockscissorspapergame2.netlify.app/">visit site</a>
            </div>
            <div>React</div>
          </div>
          <div>
            <Todolist />
            <div>
              <a
                href="https://github.com/twolove-sarang/to-do-list/tree/master"
                target="_blank"
              >
                <img
                  width={40}
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                />
              </a>
              <a href="https://todolist-sarang.netlify.app/">visit site</a>
            </div>
            <div>React</div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniGame;
