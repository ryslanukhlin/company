import styled from 'styled-components';

type TFormProps = {
    mb?: string;
};

const Form = styled.form<TFormProps>`
    margin-top: 48px;
    margin-bottom: ${({ mb }) => (mb ? mb : '48px')};
`;

export default Form;
