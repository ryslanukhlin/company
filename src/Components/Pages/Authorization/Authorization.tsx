import React from "react";
import { connect } from "react-redux";
import { loginRequest } from "../../../store/Auth/auth_action";
import {
    Button,
    CheckBoxLabel,
    ContainerForm,
    ContainerImg,
    ErrorInputMessage,
    Footer,
    FooterWrapper,
    Form,
    HelpText,
    SubTitle,
    Title,
    Wrapper,
} from "./style";
import Input from "../../input";
import { Label } from "../../label";
import { FormGroup } from "../../form_group";

import bg from "../../../assets/img/cod_home_section2-1536x1491 1.png";
import logo from "../../../assets/img/Logo.svg";
import logo2 from "../../../assets/img/Logo2.svg";
import iconMail from "../../../assets/img/iconMail.svg";
import iconPass from "../../../assets/img/iconPass.svg";
import { TRootState } from "../../../store/store";

type TProps = {
    loginRequest: typeof loginRequest;
    errorLogin: string | undefined;
    errorPassword: string | undefined;
};

const Authorization: React.FC<TProps> = ({ loginRequest, errorLogin, errorPassword }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checked, setChecked] = React.useState(false);

    const login = () => loginRequest(email, password);

    return (
        <>
            <Wrapper>
                <ContainerImg>
                    <img style={{ width: "100%", height: "100%" }} src={bg} alt="bg" />
                </ContainerImg>
                <ContainerForm>
                    <img src={logo} alt="Logo" />
                    <Title fs="20px" color="#3e9757">
                        company
                    </Title>
                    <SubTitle fs="16px" mb="66px" color="#92E3A9">
                        slogan
                    </SubTitle>
                    <Form width="466px">
                        <FormGroup mb="0px">
                            <Label>E-MAIL</Label>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Type your e-mail"
                                icon={iconMail}
                                error={!!errorLogin}
                            />
                            <ErrorInputMessage>{errorLogin}</ErrorInputMessage>
                        </FormGroup>

                        <FormGroup mb="0px">
                            <Label>pASSWORD</Label>
                            <Input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Type your password"
                                icon={iconPass}
                                error={!!errorPassword}
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

                        <Button onClick={login} type="button">
                            Login
                        </Button>

                        <HelpText>
                            Not a member? <span>Request registration.</span>
                        </HelpText>
                    </Form>
                </ContainerForm>
            </Wrapper>
            <Footer>
                <FooterWrapper>
                    <img src={logo2} alt="logo" />
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
});

const mapDispatchToProps = (dispatch: any) => ({
    loginRequest: (email: string, password: string) => dispatch(loginRequest(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
