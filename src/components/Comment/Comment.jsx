import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Comment({ comment }) {
  return (
    <>
      <Col>
        <p>
          User name: <strong>{comment.name}</strong>, email:{" "}
          <a
            href={`mailto:${comment.email}`}
            style={{ color: "#000"}}
          >
            <strong>{comment.email}</strong>
          </a>
        </p>
      </Col>
      <Row>
        <p style={{ marginBottom: "0" }}>
          <i>{comment.body}</i>
        </p>
      </Row>
      <hr />
    </>
  );
}
