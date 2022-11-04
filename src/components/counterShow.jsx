import { useCounter } from "../hooks/useCounter";

const CounterShow = () => {
  const [counter] = useCounter("counter", 0);

  return <div>{counter}</div>;
};

export default CounterShow;
