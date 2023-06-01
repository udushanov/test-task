import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <Navbar
      bg="warning"
      expand="lg"
      className="position-absolute top-0 start-0 end-0 d-flex align-items-center"
    >
      <Container className="justify-content-end">
        <Nav className="Navbar">
          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Link")}
            to="/"
          >
            Posts
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Link")}
            to="/about-me"
          >
            About me
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "Active" : "Link")}
            to="/user-details"
          >
            User details
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
