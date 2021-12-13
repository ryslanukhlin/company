import React from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Authorization from "./Components/Pages/Authorization/authorization";
import { TRootState } from "./store/store";

type TProps = {
    isAuth: boolean;
};

const router: React.FC<TProps> = ({ isAuth }) => {
    return (
        <Routes>
            {isAuth ? (
                <>
                    <Route path="/auth" element={<Navigate to="/" />} />
                    <Route path="/" element={<h1>зашел</h1>} />
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

export default connect(mapStateToProps)(router);
