import { Redirect } from 'react-router-dom';
import { isTokenValid } from '../Actions/users.js';

const PrivateUserRoute = ({ component: Component }) => {
  let authUser = isTokenValid();
  if (authUser) {
    return <Component />;
  } else return <Redirect to='/' />;
};

export default PrivateUserRoute;
