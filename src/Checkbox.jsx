import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span>체크박스 만들기</span>
    </label>
  );
};

export default Checkbox;
