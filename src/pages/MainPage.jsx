import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../components/Post/Post";
import Loader from "../components/Loader/Loader";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "../components/SearchBar/SearchBar";

export default function MainPage() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  async function fetchPosts() {
    try {
      setLoader(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setTimeout(() => {
        setPosts(response.data);
      }, 500);
      setLoader(false);
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
        <Row className="d-flex justify-content-end align-items-center mb-3">
          <Col>
            <h1 className="mb-0">Post's list</h1>
          </Col>
          <Col>
            <SearchBar value={searchValue} sendData={setSearchValue} />
          </Col>
          <Col className="d-flex justify-content-end">
            <NavDropdown title="Sort by title">
              <NavDropdown.Item href="#action3">Ascending</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Descending</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
        <Col>
          {loader && <Loader />}
          {posts
            .filter((post) =>
              post.title
                .toLocaleLowerCase()
                .includes(searchValue.toLocaleLowerCase())
            )
            .map((post) => (
              <Post key={post.id} post={post} />
            ))}
        </Col>
      </Container>
    </>
  );
}
