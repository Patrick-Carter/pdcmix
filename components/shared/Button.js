import React from "react";

const Button = ({ text, onClick, color, textColor, disabled, fontSize, marginTop }) => {
  return (
    <div>
      <button className="mainButton" onClick={onClick} disabled={disabled}>
        <p>{text}</p>
      </button>
      <style jsx>
        {`
          .mainButton {
            width: 10rem;
            font-size: ${fontSize || "1rem"};
            border-radius: 8px;
            border: 1px solid ${color};
            background-color: transparent;
            padding: 0.5rem;
            font-family: "Lato", sans-serif;
            text-transform: uppercase;
            margin-top: ${marginTop || 0};
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
