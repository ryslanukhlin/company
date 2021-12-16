import React from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Authorization from "./components/pages/authorization/authorization";
import Home from "./components/pages/home/home";
import { TRootState } from "./store/store";

type TProps = {
    isAuth: boolean;
};

const Router: React.FC<TProps> = ({ isAuth }) => {
    return (
        <Routes>
            {isAuth ? (
                <>
                    <Route path="/auth" element={<Navigate to="/" />} />
                    <Route path="/" element={<Home />} />
                </>
            ) : (
                <>
                    <Route path="*" element={<Navigate to="/auth" />} />
                    <Route path="/auth" element={<Authorization />} />
                </>
            )}
        </Routes>
    );
};

const mapStateToProps = (state: TRootState) => ({
    isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps)(Router);
