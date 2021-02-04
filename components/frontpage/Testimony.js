import React from "react";

import Card from "../shared/Card";

const Testimony = ({title, image, body, onClick, transition}) => {
  return (
    <Card
      title={title}
      image={image}
      body={body}
      transition={transition}
      onClick={onClick}
    />
  );
};

export default Testimony;
