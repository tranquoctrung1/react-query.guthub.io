import "./App.css";
import Counter from "./components/counter";
import Post from "./components/post";

import { QueryClientProvider } from "react-query";

import client from "./client";

function App() {
  return (
    <QueryClientProvider client={client}>
      <Post></Post>
      <Counter></Counter>
    </QueryClientProvider>
  );
}

export default App;
