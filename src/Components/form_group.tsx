import styled from "styled-components";

type propsFormGroup = {
    mb?: string;
};

export const FormGroup = styled.div<propsFormGroup>`
    margin-bottom: ${(props) => (props.mb ? props.mb : "40px")};

    @media (max-height: 660px) {
        margin-bottom: 20px;
    }

    @media (max-height: 400px) {
        margin-bottom: 10px;
    }
`;
