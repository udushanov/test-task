import React from "react";
import { Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <Row className="d-flex justify-content-center">
      <Spinner animation="border" variant="warning" />
    </Row>
  );
}
