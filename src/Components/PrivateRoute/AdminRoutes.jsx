import Cookies from 'js-cookie';

function AdminRoute({ children }) {
  const adminAuth = parseInt(Cookies.get('admin'), 10); // Lấy giá trị từ cookie
  const { isAuth } = useSelector((store) => store.AuthManager);

  // Kiểm tra điều kiện cho việc chuyển hướng
  if (!isAuth && adminAuth === 0) {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;
