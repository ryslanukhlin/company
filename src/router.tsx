import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Authorization from './components/pages/authorization/authorization';
import CreateClaim from './components/pages/create_claim/create_claim';
import Home from './components/pages/home/home';
import UpdateClaim from './components/pages/update_claim/update_claim';
import { TRootState } from './store/store';

type TProps = {
    isAuth: boolean;
};

const Router: React.FC<TProps> = ({ isAuth }) => {
    return (
        <Routes>
            {isAuth ? (
                <>
                    <Route path="/createClaim" element={<CreateClaim />} />
                    <Route path="/updateClaim/:id" element={<UpdateClaim />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    <Route path="/auth" element={<Authorization />} />
                    <Route path="/" element={<Navigate to="/auth" />} />
                </>
            )}
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};

const mapStateToProps = (state: TRootState) => ({
    isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps)(Router);
