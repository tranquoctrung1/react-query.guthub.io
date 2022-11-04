import { useCounter } from "../hooks/useCounter";

const CounterChildren = () => {
  const [counter, setCounter] = useCounter("counter", 0);

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default CounterChildren;
