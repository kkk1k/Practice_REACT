import * as React from "react";

const CheckboxContext = React.createContext({
  id: "",
  isChecked: false,
  onChange: () => {},
});

const CheckboxWrapper = ({ id, isChecked, onChange, children }) => {
  const value = {
    id,
    isChecked,
    onChange,
  };

  return (
    <CheckboxContext.Provider value={value}>
      {children}
    </CheckboxContext.Provider>
  );
};

const useCheckboxContext = () => {
  const context = React.useContext(CheckboxContext);
  return context;
};

const Checkbox = (props) => {
  const { id, isChecked, onChange } = useCheckboxContext();
  return (
    <input
      type="checkbox"
      id={id}
      checked={isChecked}
      onChange={onChange}
      {...props}
    />
  );
};

const Label = ({ children, ...props }) => {
  const { id } = useCheckboxContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

CheckboxWrapper.Checkbox = Checkbox;
CheckboxWrapper.Label = Label;

export default CheckboxWrapper;
