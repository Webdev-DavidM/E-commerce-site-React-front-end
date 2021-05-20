import { Redirect } from 'react-router-dom';
import { isTokenValid } from '../Actions/users.js';

const AdminRoute = ({ component: Component }) => {
  let authUser = isTokenValid();
  if (authUser && authUser.admin) {
    return <Component />;
  } else return <Redirect to='/' />;
};

export default AdminRoute;
