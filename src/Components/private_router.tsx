import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface props {
    element: React.FC;
    auth: boolean;
}

const PrviateRouter: React.FC<props> = ({ element: Component, auth }) => {
    return auth ? <Route element={<Component />} /> : <Navigate to="/auth" />;
};

export default PrviateRouter;
