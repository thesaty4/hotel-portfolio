import { Navigate } from "react-router-dom";

interface ProtectedType {
  isLoggedIn: boolean;
  element: React.ReactNode;
}
const Protected: React.FC<ProtectedType> = ({ isLoggedIn, element }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <>{element}</>;
};
export default Protected;
