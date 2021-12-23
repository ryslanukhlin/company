import React from 'react';
import styled from 'styled-components';
import Input from './input';
import notification from '../assets/img/notification.svg';
import notificationWhite from '../assets/img/notificationWhite.svg';
import userLogo from '../assets/img/user.png';
import exit from '../assets/img/exit.svg';
import searchIcon from '../assets/img/search.svg';
import useWindowSize from '../hooks/use_window_size';
import { logout } from '../store/auth/auth_reducer';
import { connect } from 'react-redux';
import { TRootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { SearchConext } from './user_layout';

export const HeaderStyle = styled.div`
    height: 96px;
    width: calc(100% - 96px);
    border-bottom: 1px solid #c2c2c2;
    margin-left: 96px;
    padding: 24px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background-color: white;
    z-index: 1;

    @media (max-width: 998px) {
        margin-left: 0;
        width: 100%;
        background-color: #7db59a;
        border-bottom: none;
    }
`;

const Burger = styled.div`
    height: 25px;
    width: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    & span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: white;
    }

    &::after {
        position: absolute;
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background-color: white;
        bottom: 1px;
    }
    &::before {
        position: absolute;
        content: '';
        display: block;
        width: 24px;
        height: 2px;
        background-color: white;
        bottom: 22px;
    }
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
`;

const NotificationStyle = styled.div`
    position: relative;
    margin-right: 29px;

    &::after {
        content: '';
        position: absolute;
        background-color: #e84393;
        height: 9px;
        width: 9px;
        border-radius: 50%;
        left: 13px;
        top: -3px;
    }
`;

const UserLogo = styled.img`
    border-radius: 50%;
`;

const UserName = styled.h2`
    font-size: 14px;
    line-height: 32px;
    color: black;
    margin-left: 20px;
    margin-right: 34px;

    @media (max-width: 998px) {
        display: none;
    }
`;

const Exit = styled.img`
    @media (max-width: 998px) {
        display: none;
    }
`;

type NotificationProps = {
    src: string;
};

const Notification: React.FC<NotificationProps> = ({ src }) => {
    return (
        <NotificationStyle>
            <img src={src} alt="notification" />
        </NotificationStyle>
    );
};

type THeaderProps = {
    setActiveBar: (active: boolean) => void;
    logout: typeof logout;
    fullName: string | undefined;
};

const Header: React.FC<THeaderProps> = ({ setActiveBar, logout, fullName }) => {
    const width = useWindowSize()[0];
    const navigate = useNavigate();
    const [search, setSearch] = React.useContext(SearchConext);

    return (
        <HeaderStyle>
            <Burger onClick={setActiveBar.bind(null, true)}>
                <span></span>
            </Burger>
            <HeaderWrapper>
                <Input
                    value={search}
                    onChange={(e) => setSearch!(e.target.value)}
                    width="585px"
                    mr="74px"
                    placeholder="search"
                    icon={searchIcon}></Input>
                <Notification src={width >= 998 ? notification : notificationWhite} />
                <UserLogo src={userLogo} />
                <UserName>{fullName}</UserName>
                <Exit
                    onClick={() => {
                        logout();
                        navigate('/');
                    }}
                    src={exit}
                    alt="exit"
                />
            </HeaderWrapper>
        </HeaderStyle>
    );
};

const mapStateToProps = (state: TRootState) => ({
    fullName: state.authReducer.user?.fullName,
});

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => {
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
        return dispatch(logout());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
