import { useCounter } from "../hooks/useCounter";
import CounterChildren from "./counterChildren";
import CounterShow from "./counterShow";

const Counter = () => {
  //   const [counter, setCounter] = useCounter("counter", 0);
  return (
    <div>
      <CounterChildren></CounterChildren>
      <CounterShow></CounterShow>
    </div>
  );
};

export default Counter;
