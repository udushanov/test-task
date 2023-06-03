import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

export default function Post({ post }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");

  async function fetchComments(id) {
    try {
      setError("");
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComments(response.data);
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchComments(post.id);
  }, []);

  return (
    <Card style={{ marginBottom: "20px" }}>
      <Card.Header>Number of post: {post.id}</Card.Header>
      <Col className="d-flex justify-content-between align-items-center">
        <Link to={`/posts/${post.id}`}>
          <Card.Img
            variant="top"
            src="../../user-profile-icon-free-vector.jpg"
            className="Img"
          />
        </Link>
        <Card.Body>
          <Card.Title>
            <strong>{post.title}</strong>
          </Card.Title>
          <Card.Text>
            <i>{post.body}</i>
          </Card.Text>
          <Col className="d-flex justify-content-end"></Col>
        </Card.Body>
      </Col>
      <Accordion defaultActiveKey={["0"]}>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Comments</Accordion.Header>
          <Accordion.Body>
            {error && <ErrorBoundary error={error} />}
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Card>
  );
}
