import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location, location.pathname);

    // fix the browser reload issue, basically it holds the state into a loader 
    if (loading) {
        return (
            <div className='flex justify-center mt-3 mb-6'>
                <span className="loading loading-spinner text-info"></span>
            </div>
        )
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;