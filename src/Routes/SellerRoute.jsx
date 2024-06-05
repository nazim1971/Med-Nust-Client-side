import { Navigate } from "react-router-dom";
import useRole from "../Hooks/isRole";
import LoadingSpinner from "../components/LoadingSpiner";

const SellerRoute = ({children}) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'seller') return children
  console.log(role);
  return <Navigate to='/dashboard' />
};

export default SellerRoute;