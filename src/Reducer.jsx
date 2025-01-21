// import React, { useState } from "react";

// function Reducer() {
//   const [number, setNumber] = useState(0);
//   const [save, setSave] = useState(500000);

//   const handleMinus = () => {
//     setSave((prev) => prev - number);
//     setNumber(0);
//   };

//   const handlePlus = () => {
//     setSave((prev) => prev + number);
//     setNumber(0);
//   };
//   return (
//     <div>
//       <h2>은행</h2>
//       <p>잔고 : {save}</p>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(parseInt(e.target.value))}
//         step="1000"
//       />
//       <button onClick={handlePlus}>예금</button>
//       <button onClick={handleMinus}>츨금</button>
//     </div>
//   );
// }

// export default Reducer;

import React, { useReducer, useState } from "react";

// reducer - state를 업데이트 하는 역할
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
  }
};

function Reducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>은행</h2>
      <p>잔고 : {money}</p>
      <input
        type="number"
        value={number}
        step="1000"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        }}
      >
        출금
      </button>
    </div>
  );
}

export default Reducer;
