import MainRouter from "./components/MainRouter";
import BasketProvider from "./context/BasketProvider";
import QueryContext from "./context/QueryProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <QueryContext>
      <BasketProvider>
        <Toaster />
        <MainRouter />
      </BasketProvider>
    </QueryContext>
  );
}

export default App;
