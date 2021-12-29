import React from 'react';
import styled from 'styled-components';
import Input from './input';
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
    white: string;
};

const Notification: React.FC<NotificationProps> = ({ white }) => {
    const [focus, setFocus] = React.useState(false);

    return (
        <NotificationStyle onClick={setFocus.bind(null, true)}>
            <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.73 20C12.5542 20.3031 12.3018 20.5547 11.9982 20.7295C11.6946 20.9044 11.3504 20.9965 11 20.9965C10.6496 20.9965 10.3054 20.9044 10.0018 20.7295C9.69816 20.5547 9.44581 20.3031 9.27 20M21 16H1C1.79565 16 2.55871 15.6839 3.12132 15.1213C3.68393 14.5587 4 13.7956 4 13V8C4 6.14348 4.7375 4.36301 6.05025 3.05025C7.36301 1.7375 9.14348 1 11 1C12.8565 1 14.637 1.7375 15.9497 3.05025C17.2625 4.36301 18 6.14348 18 8V13C18 13.7956 18.3161 14.5587 18.8787 15.1213C19.4413 15.6839 20.2044 16 21 16V16Z"
                    stroke={white}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <input type="hidden" autoFocus={focus} />
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
                <Notification white={width >= 998 ? '#5C5C5C' : 'white'} />
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
