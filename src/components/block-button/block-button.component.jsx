import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BlockButton = ({ text, url, onClick, id, type }) => {
  let renderBotton = (
    <Button
      as={Link}
      to={id ? `/${url}/${id}` : `/${url}`}
      variant="dark"
      size="md"
    >
      {text}
    </Button>
  );
  if (type) {
    renderBotton = (
      <Button variant="dark" size="md" type={type}>
        {text}
      </Button>
    );
  }
  return <div className="d-grid mt-4">{renderBotton}</div>;
};
