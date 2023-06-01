import MainRouter from "./components/MainRouter";
import BasketProvider from "./context/BasketProvider";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/reactQuery";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketProvider>
        <Toaster />
        <MainRouter />
        <ReactQueryDevtools />
      </BasketProvider>
    </QueryClientProvider>
  );
}

export default App;
