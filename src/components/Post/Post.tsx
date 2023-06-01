import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Post.css";
import { Col } from "react-bootstrap";

export default function Post({ post }) {
  return (
    <Card style={{marginBottom: '20px'}}>
      <Card.Header>Number of post: {post.id}</Card.Header>
      <Col className="d-flex justify-content-between align-items-center">
        <Card.Img
          variant="top"
          src="src/assets/user-profile-icon-free-vector.jpg"
          className="Img"
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Col className="d-flex justify-content-end">
            <Button variant="primary" className="me-2">
              Comments
            </Button>
            <Button variant="warning">Read more...</Button>
          </Col>
        </Card.Body>
      </Col>
    </Card>
  );
}
