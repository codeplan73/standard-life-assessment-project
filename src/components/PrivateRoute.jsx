import { Outlet } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../provider/AuthProvider";

const PrivateRoute = () => {
  // const { token } = useAuth();
  // return token ? <Outlet /> : <Navigate to="/login" replace />;
  return <Outlet />;
};
export default PrivateRoute;
