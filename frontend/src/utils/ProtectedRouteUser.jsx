import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRouteUser = ({auth, redirectPath="/login"}) => {
  if(auth){
    return <Outlet />
  }
  return <Navigate to={redirectPath} replace/>
}

export default ProtectedRouteUser;