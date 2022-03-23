import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BlockButton = ({ text, url, id, type, data }) => {
  let renderBotton = (
    <Button
      as={Link}
      to={id ? `/${url}/${id}` : `/${url}`}
      variant="light"
      size="md"
      // variant="outline-light"
    >
      {text}
    </Button>
  );
  if (type) {
    renderBotton = (
      <Button
        variant="light"
        // variant="outline-light"
        size="md"
        type={type}
        disabled={data.errors}
      >
        {text}
      </Button>
    );
  }
  return <div className="d-grid mt-4">{renderBotton}</div>;
};
