import PropTypes from 'prop-types'
import useRole from '../Hooks/isRole'
import { Navigate } from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpiner'

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute

AdminRoute.propTypes = {
  children: PropTypes.element,
}
