import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../components/Post/Post";
import Loader from "../components/Loader/Loader";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchBar from "../components/SearchBar/SearchBar";
import Form from "react-bootstrap/Form";

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

  const sortHandler = (event) => {
    const order = event.target.value;

    let sortedPosts = [...posts];

    if (order === "1") {
      sortedPosts.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }

        if (a.title > b.title) {
          return 1;
        }

        return 0;
      });
    } 

    if (order === "2") {
      sortedPosts.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        }

        if (a.title > b.title) {
          return -1;
        }

        return 0;
      });
    }

    setPosts(sortedPosts);
  };

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
          <Col className="d-flex justify-content-end align-items-center gap-2">
            <label className="mb-0">Sort by title:</label>
            <Form.Select
              style={{ width: "40%" }}
              defaultValue={0}
              onChange={sortHandler}
            >
              <option value={0} disabled hidden>
                Default
              </option>
              <option value={1}>Ascending</option>
              <option value={2}>Descending</option>
            </Form.Select>
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
