import { useState, useCallback } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // useCallback ensures this function is not recreated on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;