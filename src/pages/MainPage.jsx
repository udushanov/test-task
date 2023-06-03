import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Post from "../components/Post";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import ErrorBoundary from "../components/ErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { postsActions } from "../state/actions/postsActions";

export default function MainPage() {
  const posts = useSelector((state) => state.posts.posts);
  // const postsList = useSelector((state) => state.posts.posts);
  // const [posts, setPosts] = useState(postsList);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;

  const dispatch = useDispatch();

  // async function fetchPosts() {
  //   try {
  //     setError("");
  //     setLoader(true);
  //     const response = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts",
  //       {
  //         params: {
  //           _page: page,
  //           _limit: limit,
  //         },
  //       }
  //     );

  //     const countPages = Math.ceil(response.headers["x-total-count"] / limit);
  //     setTotalPages(countPages);

  //     setTimeout(() => {
  // setPosts(response.data);
  //     }, 500);
  //     setLoader(false);
  //   } catch (err) {
  //     setLoader(false);
  //     setError(err.message);
  //   }
  // }

  async function fetchPosts() {
    try {
      setError("");
      console.log(loader);
      setLoader(true);
      console.log(loader)
      // const countPages = Math.ceil(response.headers["x-total-count"] / limit);
      // setTotalPages(countPages);
      // const params = { _page: page, _limit: limit };
      
      setTimeout(() => {
        dispatch({
          type: postsActions.SET_POSTS,
          params: { _page: page, _limit: limit },
        });
        console.log(posts)
        // setPosts(postsList);
      }, 500);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   dispatch({ type: postsActions.SET_POSTS });
  // }, []);

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

    // setPosts(sortedPosts);
  };

  const pageIncerement = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }

    return;
  };

  const pageDecerement = () => {
    if (page > 1) {
      setPage(page - 1);
    }

    return;
  };

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
          {error && <ErrorBoundary error={error} />}
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
        {!error && (
          <Col className="d-flex justify-content-center">
            <Pagination>
              <Pagination.First onClick={() => setPage(1)} />
              <Pagination.Prev onClick={pageDecerement} />
              <Pagination.Item>{page}</Pagination.Item>
              <Pagination.Next onClick={pageIncerement} />
              <Pagination.Last onClick={() => setPage(totalPages)} />
            </Pagination>
          </Col>
        )}
      </Container>
    </>
  );
}
