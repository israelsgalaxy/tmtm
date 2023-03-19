import { useState, useMemo } from "react";

const useFilter = (data) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((student) => {
      const searchValue = searchQuery.toLowerCase();
      const name = student.name.toLowerCase();
      const destination = student.destination.toLowerCase();
      const time = student.time.toLowerCase();
      const fare = student.amount.toString().toLowerCase();

      return (
        name.includes(searchValue) ||
        destination.includes(searchValue) ||
        time.includes(searchValue) ||
        fare.includes(searchValue)
      );
    });
  }, [data, searchQuery]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleReset = () => {
    setSearchQuery("");
  };

  return {
    filteredData,
    searchQuery,
    handleSearchQueryChange,
    handleReset,
  };
};

export default useFilter;
