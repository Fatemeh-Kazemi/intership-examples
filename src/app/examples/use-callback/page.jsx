"use client";
import { useState, useCallback } from "react";
import Button from "@/components/Button";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
        <div className="flex space-x-4">
          <Button
            className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={increment}
          >
            Increment
          </Button>
          <Button
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={decrement}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
