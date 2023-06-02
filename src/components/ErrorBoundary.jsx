import React from "react";

export default function ErrorBoundary({ error }) {
  return <p style={{color: 'red', textAlign: 'center'}}>{error}</p>;
}
