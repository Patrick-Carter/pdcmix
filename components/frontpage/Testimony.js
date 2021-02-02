import React from "react";

import Card from "../shared/Card";

const Testimony = ({title, image, body, onClick}) => {
  return (
    <Card
      title={title}
      image={image}
      body={body}
      onClick={onClick}
    />
  );
};

export default Testimony;
