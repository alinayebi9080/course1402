import MainRouter from "./components/MainRouter";
import BasketProvider from "./context/BasketProvider";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/reactQuery";
import { Suspense } from "react";
import Loading from "./components/common/Loading";
import UpdateDialog from "./components/common/UpdateDialog";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BasketProvider>
        <button
          id="install_button"
          hidden
          className=" w-full text-white bg-red-500 p-2"
        >
          نصب
        </button>
        <UpdateDialog />
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
