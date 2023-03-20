import React from "react";

const useLocalStorage = (initialValue) => {
  const [value, setValue] = React.useState(() => {
    const jsonValue = localStorage.getItem("key");
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  React.useEffect(() => {
    localStorage.setItem("key", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
