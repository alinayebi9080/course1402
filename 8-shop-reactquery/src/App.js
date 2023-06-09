import MainRouter from "./components/MainRouter";
import BasketProvider from "./context/BasketProvider";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/reactQuery";
import { Suspense } from "react";
import Loading from "./components/common/Loading";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketProvider>
        <Suspense fallback={<Loading />}>
          <Toaster />
          <MainRouter />
          <ReactQueryDevtools />
        </Suspense>
      </BasketProvider>
    </QueryClientProvider>
  );
}

export default App;
