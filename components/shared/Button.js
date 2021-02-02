import React from "react";

const Button = ({ text, onClick, color, textColor }) => {
  return (
    <div>
      <button className="mainButton" onClick={onClick}>
        <p>{text}</p>
      </button>
      <style jsx>
        {`
          .mainButton {
            width: 10rem;
            font-size: 1rem;
            border-radius: 8px;
            border: 1px solid ${color};
            background-color: transparent;
            padding: 0.5rem;
            font-family: "Lato", sans-serif;
            text-transform: uppercase;
            transition: all 200ms ease;
            cursor: pointer;
          }

          .mainButton:hover {
            background-color: rgba(37, 44, 65, 0.2);
            transform: scale(1.1);
          }

          p {
              color: ${textColor}
          }
        `}
      </style>
    </div>
  );
};

export default Button;
