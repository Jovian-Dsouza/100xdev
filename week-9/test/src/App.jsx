import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function useInterval(func, n){
  useEffect(()=>{
    const interval = setInterval(func, n)

    return () => {
      clearInterval(interval)
    }
  })
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return (
    <div>
      <div>Timer is at {count}</div>
      <SearchBar/>
    </div>
  );
}

export default App;
