import styled from "styled-components";

const InputWrapperStyle = styled.div`
    display: block;
    position: relative;
`;

type propsInpit = {
    icon?: string;
    error?: boolean;
};

const InputStyle = styled.input<propsInpit>`
    background: #f0f0f0;
    border-radius: 16px;
    border: ${(props) => (props.error ? "2px solid #cc1f1f" : "none")};
    font-size: 18px;
    line-height: 22px;
    color: #2d3436;
    padding: 11px 16px;
    width: 100%;
    outline: none;
    position: relative;

    @media (max-height: 500px) {
        font-size: 12px;
    }
`;

export const InputIconImg = styled.img`
    position: absolute;
    right: 16px;
    bottom: 14px;
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
};

const Input: React.FC<TInputProps> = ({ icon, type, error, ...props }) => {
    if (type === "checkbox") {
        return <InputStyle type={type} {...props} />;
    }
    return (
        <InputWrapperStyle>
            <InputStyle error={error} {...props} type={type} />
            {icon && <InputIconImg src={icon} alt="icon form" />}
        </InputWrapperStyle>
    );
};

export default Input;