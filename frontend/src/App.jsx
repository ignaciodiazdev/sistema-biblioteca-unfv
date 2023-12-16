import { AppProvider } from "./context";
import { Navegacion } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppProvider>
      <Navegacion />
      <ToastContainer
        position="bottom-right"
        autoClose={2100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: "14px" }}
      />
    </AppProvider>
  );
}

export default App;
