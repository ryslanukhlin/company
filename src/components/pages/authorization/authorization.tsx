import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../../store/auth/auth_action';
import {
    CheckBoxLabel,
    ContainerForm,
    ContainerImg,
    Footer,
    FooterWrapper,
    Form,
    HelpText,
    Wrapper,
} from './style';
import Input from '../../input';
import { Label } from '../../label';
import { FormGroup } from '../../form_group';
import { MainTitle, Title } from '../../title';
import { TRootState } from '../../../store/store';
import { SubTitle } from '../../sub_title';
import { Button } from '../../button';
import { ErrorInputMessage } from '../../input_error';
import { useNavigate } from 'react-router-dom';
import Link from '../../link';

import logo from '../../../assets/img/Logo.png';
import logo2 from '../../../assets/img/Logo2.png';
import iconMail from '../../../assets/img/iconMail.svg';
import iconPass from '../../../assets/img/iconPass.svg';

type TProps = {
    loginRequest: typeof loginRequest;
    errorLogin: string | undefined;
    errorPassword: string | undefined;
    download: boolean;
    isAuth: boolean;
};

const Authorization: React.FC<TProps> = ({
    loginRequest,
    errorLogin,
    errorPassword,
    download,
    isAuth,
}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);

    const navigate = useNavigate();

    const login = () => loginRequest(email, password, checked);

    if (isAuth) {
        navigate('/');
    }

    if (download) {
        return null;
    }

    return (
        <>
            <Wrapper>
                <ContainerImg />
                <ContainerForm>
                    <img src={logo} alt="Logo" />
                    <MainTitle fs="20px" color="#3e9757">
                        company
                    </MainTitle>
                    <SubTitle fs="16px" mb="66px" color="#92E3A9">
                        slogan
                    </SubTitle>
                    <Form width="466px">
                        <FormGroup mb="0px">
                            <Label htmlFor="email">E-MAIL</Label>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Type your e-mail"
                                icon={iconMail}
                                error={!!errorLogin}
                                id="email"
                            />
                            <ErrorInputMessage>{errorLogin}</ErrorInputMessage>
                        </FormGroup>

                        <FormGroup mb="0px">
                            <Label htmlFor="password">pASSWORD</Label>
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Type your password"
                                icon={iconPass}
                                error={!!errorPassword}
                                id="password"
                            />
                            <ErrorInputMessage>{errorPassword}</ErrorInputMessage>
                        </FormGroup>

                        <FormGroup mb="35px">
                            <Input
                                checked={checked}
                                onChange={(e) => setChecked(e.target.checked)}
                                type="checkbox"
                                placeholder="Type your password"
                                id="remember"
                            />
                            <CheckBoxLabel htmlFor="remember">Keep me logged in</CheckBoxLabel>
                        </FormGroup>

                        <Button
                            fs="18px"
                            width="466px"
                            height="52px"
                            mb="16px"
                            onClick={login}
                            type="button">
                            Login
                        </Button>

                        <HelpText>
                            Not a member? <Link to="/auth">Request registration.</Link>
                        </HelpText>
                    </Form>
                </ContainerForm>
            </Wrapper>
            <Footer>
                <FooterWrapper>
                    <img src={logo2} alt="logo" width="46" />
                    <Title>company</Title>
                    <SubTitle>slogan</SubTitle>
                </FooterWrapper>
            </Footer>
        </>
    );
};

const mapStateToProps = (state: TRootState) => ({
    errorLogin: state.authReducer.errorLogin,
    errorPassword: state.authReducer.errorPassword,
    download: state.authReducer.download,
    isAuth: state.authReducer.isAuth,
});

const mapDispatchToProps = (dispatch: any) => ({
    loginRequest: (email: string, password: string, check: boolean) =>
        dispatch(loginRequest(email, password, check)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
