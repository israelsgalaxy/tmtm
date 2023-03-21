import { useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fetchURL = async ({ path, data, method, redirecturl }) => {
    let URL = `http://localhost:4000/`;
    setIsLoading(true);

    const response = await fetch(URL, {
      method: "GET",
      // credentials: "include",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(data),
    });
    const res = await response.json();
    setIsLoading(false);
    return res;
  };

  return {
    isLoading,
    fetchURL,
  };
};

export default useFetch;
