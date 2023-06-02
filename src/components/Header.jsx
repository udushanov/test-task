import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Card, Col } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="warning" expand={false} className="mb-3">
        <Container fluid className="d-flex justify-content-end">
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Card style={{ border: "none" }}>
                <Col className="d-flex align-items-center">
                  <Card.Img
                    variant="top"
                    src="src/assets/user-profile-icon-free-vector.jpg"
                    style={{
                      height: "32px",
                      width: "32px",
                      marginRight: "15px",
                    }}
                  />
                  <Card.Body className="d-flex flex-column p-0">
                    <h5>Ulugbek</h5>
                    <Card.Text>
                      <a
                        href="mailto:u.dushanov@gmail.com"
                        style={{ color: "#000" }}
                      >
                        <strong>u.dushanov@gmail.com</strong>
                      </a>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Card>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 fs-5">
                <NavLink
                  className={({ isActive }) => (isActive ? "Active" : "Link")}
                  to="/"
                  style={{ marginBottom: "20px" }}
                >
                  Posts
                </NavLink>
                <NavLink
                  className={({ isActive }) => (isActive ? "Active" : "Link")}
                  to="/about-me"
                >
                  About me
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
