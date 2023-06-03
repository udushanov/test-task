import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/reducers/counterSlice";
// import { postsActions } from "../state/postsActions";

export default function AboutPage() {
  const count = useSelector((state) => state.counter.value);
  // const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  // // const handler = () => {
  // //   dispatch({ type: postsActions.SET_POSTS });

  // // }

  // useEffect(() => {
  //   dispatch({ type: postsActions.SET_POSTS });
  // }, []);

  // console.log(posts);
  return (
    <>
      <Container>
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <h3>{count}</h3>
        <Button onClick={() => dispatch(increment())}>+</Button>
        {/* <Button onClick={handler}>fetch</Button> */}
      </Container>
    </>
  );
}
