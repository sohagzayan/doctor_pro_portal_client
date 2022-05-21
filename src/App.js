import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "./context/AuthContextProvider";
import RootRoutes from "./routes/RootRoutes";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <RootRoutes />
        </AuthContextProvider>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
