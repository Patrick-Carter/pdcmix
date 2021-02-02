import React from "react";

import useSound from "use-sound";

const PlayButton = ({handleMusic}) => {
  

  return (
    <div className="playButtonContainer">
      <img
        className="playButtonImg"
        src="/frontpage/playButton.svg"
        alt="play music button"
        onClick={handleMusic}
      />
      <style>
        {`

        .playButtonContainer {
            display: flex;
            justify-content: center;
            
        }
                    
        .playButtonImg {
            width: 30%;
        }
                    
         `}
      </style>
    </div>
  );
};

export default PlayButton;
