import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const adminAuth = parseInt(sessionStorage.getItem("admin"), 10); // Chuyển đổi thành số
  const { isAuth } = useSelector((store) => store.AuthManager);

  // Kiểm tra điều kiện cho việc chuyển hướng
  if (!isAuth && adminAuth === 0) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;
