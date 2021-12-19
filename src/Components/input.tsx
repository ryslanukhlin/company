import styled from 'styled-components';
import Form from './form';
import { HeaderStyle } from './header';

const InputWrapperStyle = styled.div`
    display: block;
    position: relative;

    ${HeaderStyle} & {
        @media (max-width: 1300px) {
            display: none;
        }
    }
`;

type propsInpit = {
    icon?: string;
    error?: boolean;
    width?: string;
    mr?: string;
    disabled?: boolean;
};

const InputStyle = styled.input<propsInpit>`
    background: #f0f0f0;
    border-radius: 16px;
    border: ${(props) => (props.error ? '2px solid #cc1f1f' : 'none')};
    font-size: 18px;
    line-height: 22px;
    color: ${({ disabled }) => (disabled ? '#ADADAD' : '#2d3436')};
    padding: 11px 16px;
    width: ${(props) => (props.width ? props.width : '100%')};
    margin-right: ${(props) => (props.mr ? props.mr : '0px')};
    outline: none;
    position: relative;

    @media (max-height: 500px) {
        font-size: 12px;
    }

    ${Form} & {
        @media (max-width: 650px) {
            width: 100%;
        }
    }
`;

export const InputIconImg = styled.img`
    position: absolute;
    right: 16px;
    bottom: 14px;

    ${HeaderStyle} & {
        right: calc(15%);
    }
`;

type TInputProps = {
    value?: any;
    onChange?: (e: any) => void;
    type?: string;
    placeholder?: string;
    checked?: boolean;
    id?: string;
    icon?: string;
    error?: boolean;
    width?: string;
    mr?: string;
    disabled?: boolean;
};

const Input: React.FC<TInputProps> = ({ icon, type, error, disabled, ...props }) => {
    if (type === 'checkbox') {
        return <InputStyle type={type} {...props} />;
    }
    return (
        <InputWrapperStyle>
            <InputStyle disabled={disabled} error={error} {...props} type={type} />
            {icon && <InputIconImg src={icon} alt="icon form" />}
        </InputWrapperStyle>
    );
};

export default Input;
