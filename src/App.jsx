import { useCallback, useEffect, useMemo, useState } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import SocketComponent from "./SocketComponent";

function App() {
  const [firstValue, setFirstValue] = useState(null);

  const item = {
    name: "Kim",
    age: "27",
  };

  const memorizedItem = useMemo(() => item, []);

  useEffect(() => {
    setTimeout(() => {
      setFirstValue("ChangedValue");
    }, 3000);
  }, []);

  return (
    <div>
      <FirstChild value={firstValue}></FirstChild>
      <SecondChild item={memorizedItem}></SecondChild>
      <SocketComponent />
    </div>
  );
}

export default App;
