import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { TRootState } from "../store/store";
import Header from "./header";
import Navbar from "./navbar";

type TContainerProps = {
    activeBar: boolean;
};

const BgContainer = styled.div<TContainerProps>`
    position: relative;

    &::after {
        content: ${(props) => (props.activeBar ? "''" : "none")};
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
    }
`;

const Container = styled.div`
    margin-left: 96px;
    padding: 160px 56px 64px;
    z-index: -2;

    @media (max-width: 998px) {
        margin-left: 0px;
        padding: 160px 16px 0px;
    }
`;

type TPropsUserLaout = {
    isAuth: boolean;
};

const UserLayout: React.FC<TPropsUserLaout> = ({ children, isAuth }) => {
    const [activeBar, setActiveBar] = React.useState(false);

    const replaceActiveNavBar = (active: boolean) => {
        setActiveBar(active);
        active
            ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
            : (document.getElementsByTagName("body")[0].style.overflow = "scroll");
    };

    if (!isAuth) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar activeBar={activeBar} />
            <Header setActiveBar={replaceActiveNavBar} />
            {activeBar ? (
                <BgContainer onClick={replaceActiveNavBar.bind(null, false)} activeBar={activeBar}>
                    <Container>{children}</Container>
                </BgContainer>
            ) : (
                <Container>{children}</Container>
            )}
        </>
    );
};

const mapStateToProps = (state: TRootState) => ({
    isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps)(UserLayout);
