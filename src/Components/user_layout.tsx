import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getUser } from '../store/auth/auth_action';
import { TRootState } from '../store/store';
import Header from './header';
import Navbar from './navbar';

type TContainerProps = {
    activeBar: boolean;
};

const BgContainer = styled.div<TContainerProps>`
    position: relative;

    &::after {
        content: ${(props) => (props.activeBar ? "''" : 'none')};
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
        padding: 130px 16px 0px;
    }
`;

type TPropsUserLaout = {
    isAuth: boolean;
    getUser: typeof getUser;
    download: boolean;
};

const UserLayout: React.FC<TPropsUserLaout> = ({ children, isAuth, getUser, download }) => {
    const [activeBar, setActiveBar] = React.useState(false);

    React.useEffect(() => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');

        if (userId && token) {
            getUser(userId, token);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const replaceActiveNavBar = (active: boolean) => {
        setActiveBar(active);
        active
            ? (document.getElementsByTagName('body')[0].style.overflow = 'hidden')
            : (document.getElementsByTagName('body')[0].style.overflow = 'scroll');
    };

    if (download) {
        return null;
    }

    if (!isAuth) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar activeBar={activeBar} />
            <Header setActiveBar={replaceActiveNavBar} />
            <BgContainer onClick={replaceActiveNavBar.bind(null, false)} activeBar={activeBar}>
                <Container>{children}</Container>
            </BgContainer>
        </>
    );
};

const mapStateToProps = (state: TRootState) => ({
    isAuth: state.authReducer.isAuth,
    download: state.authReducer.download,
});

const mapDispatchToProps = (dispatch: any) => ({
    getUser: (userId: string, token: string) => dispatch(getUser(userId, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLayout);
