import React, { useEffect, useState } from "react";
// import useDebounce from "./useDebounce";

function useDebounce(inputValue, n){
    const [debouncedValue, setDebouncedValue] = useState(inputValue)

    useEffect(()=>{
        const interval = setTimeout(()=>{setDebouncedValue(inputValue)}, n)

        return () => {
            clearInterval(interval)
        }
    }, [inputValue, n])

    return debouncedValue
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <div>
    Debounced value is {debouncedValue}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
