import "./App.css";
import Post from "./components/post";

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Post></Post>
    </QueryClientProvider>
  );
}

export default App;
