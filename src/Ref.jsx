import React, { useState, useRef } from "react";
import { useEffect } from "react";

function Ref() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef();

  const plusRef = () => {
    countRef.current++;
  };

  const plusState = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <div>
        <div>state: {count}</div> <button onClick={plusState}>plus</button>
        <div>ref: {countRef.current}</div>{" "}
        <button onClick={plusRef}>plus</button>
      </div>
      <input ref={inputRef} placeholder="hello" />
    </>
  );
}

export default Ref;
