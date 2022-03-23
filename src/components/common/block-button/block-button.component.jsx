import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const BlockButton = ({ text, url, id, type, data, onClick }) => {
  let renderBotton = (
    // For navigation buttons
    <Button
      as={Link}
      to={id ? `/${url}/${id}` : `/${url}`}
      variant="light"
      size="md"
      onClick={onClick}
    >
      {text}
    </Button>
  );

  // For submit buttons
  if (type) {
    renderBotton = (
      <Button
        variant="light"
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
