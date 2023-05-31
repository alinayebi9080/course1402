import MainRouter from "./components/MainRouter";
import AuthProvider from "./context/AuthContext";
import BasketProvider from "./context/BasketProvider";
import QueryProvider from "./context/QueryProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <BasketProvider>
          <Toaster />
          <MainRouter />
        </BasketProvider>
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;
