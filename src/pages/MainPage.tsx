import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Post from "../components/Post/Post";

export default function MainPage() {
  const [posts, setPosts] = useState([]);

  async function fetchPosts() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      console.log(response.data);
      setPosts(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Row>
          <Col>
            <h1 style={{marginBottom: '20px'}}>Post's list</h1>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
