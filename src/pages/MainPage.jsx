import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../components/Post/Post";
import Loader from "../components/Loader/Loader";


export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  async function fetchPosts() {
    try {
      setLoader(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setTimeout(() => {
        setPosts(response.data);
      }, 500)
      setLoader(false)
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
            <h1 style={{ marginBottom: "20px" }}>Post's list</h1>
            {loader && <Loader />}
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
