import { useState } from "react";
import { Button } from "zeni-ui";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button variant="solid" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <br />
      <br />
    </>
  );
}

export default App;
