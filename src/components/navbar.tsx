import React from 'react';
import styled from 'styled-components';
import { SubTitle } from './sub_title';
import { Title } from './title';

import logo2 from '../assets/img/Logo2.png';
import nav1 from '../assets/img/nav/1.svg';
import nav2 from '../assets/img/nav/2.svg';
import nav3 from '../assets/img/nav/3.svg';
import nav4 from '../assets/img/nav/4.svg';
import nav5 from '../assets/img/nav/5.svg';
import nav6 from '../assets/img/nav/6.svg';
import nav7 from '../assets/img/nav/7.svg';
import { useNavigate } from 'react-router-dom';

const NavbarStyle = styled.nav<TNavbarProps>`
    background: linear-gradient(180deg, #d5eee2 0%, #7db59a 43.23%);
    height: 100vh;
    width: 96px;
    position: fixed;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
    transition: 0.1s all ease-in-out;
    overflow: auto;

    @media (max-width: 998px) {
        background: #7db59a;
        width: 256px;
        align-items: flex-start;
        left: ${(props) => (props.activeBar ? '0' : '-100%')};
    }
`;

const NavBarLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 998px) {
        display: none;
    }
`;

const NavElements = styled.ul`
    list-style: none;

    @media (max-width: 998px) {
        margin-top: 80px;
    }

    @media (max-height: 400px) {
        margin-top: 0px !important;
    }
`;

type INavElementProps = {
    active?: boolean;
};

const NavElement = styled.li<INavElementProps>`
    margin-bottom: 36px;
    position: relative;

    display: flex;
    align-items: center;

    & h2 {
        display: none;
    }

    &::after {
        content: '';
        position: absolute;
        background-color: white;
        height: 40px;
        width: 3px;
        left: -36px;
        bottom: -4px;
        display: ${(props) => (props.active ? 'block' : 'none')};
    }

    &:last-child {
        margin-bottom: 0px;
    }

    @media (max-width: 998px) {
        padding-left: 30px;

        &::after {
            left: 1px;
        }

        & h2 {
            display: inline-block;
            letter-spacing: 0.25px;
            font-size: 16px;
            line-height: 20px;
            color: #ffffff;
            margin-left: 35px;
        }
    }
`;

type TNavbarProps = {
    activeBar: boolean;
};

const Navbar: React.FC<TNavbarProps> = ({ activeBar }) => {
    const navigate = useNavigate();

    return (
        <NavbarStyle activeBar={activeBar}>
            <NavBarLogo onClick={() => navigate('/')}>
                <img src={logo2} alt="Logo" width="46" />
                <Title fs="12px">company</Title>
                <SubTitle fs="9px" mb="47px">
                    slogan
                </SubTitle>
            </NavBarLogo>
            <NavElements>
                <NavElement active={true}>
                    <img src={nav1} alt="nav1" />
                    <h2>Home</h2>
                </NavElement>
                <NavElement>
                    <img src={nav2} alt="nav2" />
                    <h2>Services</h2>
                </NavElement>
                <NavElement>
                    <img src={nav3} alt="nav3" />
                    <h2>Storage</h2>
                </NavElement>
                <NavElement>
                    <img src={nav4} alt="nav4" />
                    <h2>Charts</h2>
                </NavElement>
                <NavElement>
                    <img src={nav5} alt="nav5" />
                    <h2>Currency</h2>
                </NavElement>
                <NavElement>
                    <img src={nav6} alt="nav6" />
                    <h2>Base</h2>
                </NavElement>
                <NavElement>
                    <img src={nav7} alt="nav7" />
                    <h2>Locations</h2>
                </NavElement>
            </NavElements>
        </NavbarStyle>
    );
};

export default Navbar;
