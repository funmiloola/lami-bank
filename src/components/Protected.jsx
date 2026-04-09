import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ allowedRoles }) => {
  const location = useLocation();
  const getUser = () => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      return null;
    }
  };

  const user = getUser();
  if (!user || !user.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  const isAuthorized = allowedRoles.includes(user.role);

  if (!isAuthorized) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};