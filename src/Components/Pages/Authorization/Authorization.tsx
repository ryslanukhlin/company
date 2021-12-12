import React from "react";
import {
    Button,
    CheckBoxLabel,
    ContainerForm,
    ContainerImg,
    Footer,
    FooterWrapper,
    Form,
    FormGroup,
    HelpText,
    Input,
    Label,
    SubTitle,
    Title,
    Wrapper,
} from "./style";

import bg from "../../../assets/img/cod_home_section2-1536x1491 1.png";
import logo from "../../../assets/img/Logo.svg";
import logo2 from "../../../assets/img/Logo2.svg";

export default function Authorization() {
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
                        <FormGroup mb="32px">
                            <Label>E-MAIL</Label>
                            <Input type="email" placeholder="Type your e-mail" />
                        </FormGroup>

                        <FormGroup mb="27px">
                            <Label>pASSWORD</Label>
                            <Input type="password" placeholder="Type your password" />
                        </FormGroup>

                        <FormGroup mb="35px">
                            <Input type="checkbox" placeholder="Type your password" id="remember" />
                            <CheckBoxLabel htmlFor="remember">Keep me logged in</CheckBoxLabel>
                        </FormGroup>

                        <Button type="button">Login</Button>

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
}
