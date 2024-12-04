import React from "react";

function SecondChild({ item }) {
  const date = new Date();
  console.log("SecondChild rendered!", date);

  return (
    <div>
      {item.name}
      {item.age}
    </div>
  );
}

export default React.memo(SecondChild);
