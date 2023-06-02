import React from "react";
import Form from "react-bootstrap/Form";

export default function SearchBar({value, sendData}) {
  const sendInputValue = (event) => {
    sendData(event.target.value)
  }

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={value}
        onChange={sendInputValue}
      />
    </Form>
  );
}