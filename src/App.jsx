import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="container p-4 mx-auto main">
        <Outlet />
      </div>
    </>
  );
}

export default App;
