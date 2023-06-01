import React from "react";
import { Col, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function UserPage() {
  const {pathname} = useLocation()
  const handler = () => {
    const path = pathname.split("/");
    // console.log(path[path.length - 1]);
  }

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Col>
          <button onClick={handler}>123</button>
        </Col>
      </Container>
    </>
  );
}
