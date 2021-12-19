import React from 'react';
import styled from 'styled-components';
import Form from './form';
import { HeaderStyle } from './header';

const SelectWrapperStyle = styled.div`
    display: block;
    position: relative;

    ${HeaderStyle} & {
        @media (max-width: 1300px) {
            display: none;
        }
    }

    &::after {
        content: '';
        position: absolute;
        background-color: #5c5c5c;
        height: 2px;
        width: 6px;
        transform: rotate(-45deg);
        top: 22px;
        left: 566px;
        z-index: 1;
    }

    @media (max-width: 650px) {
        &:after {
            left: calc(100% - 20px);
        }
    }

    &::before {
        content: '';
        position: absolute;
        background-color: #5c5c5c;
        height: 2px;
        width: 6px;
        transform: rotate(45deg);
        top: 22px;
        left: 562px;
        z-index: 1;
    }

    @media (max-width: 650px) {
        &:before {
            left: calc(100% - 23px);
        }
    }
`;

type propsInpit = {
    icon?: string;
    error?: boolean;
    width?: string;
    mr?: string;
};

const SelectStyle = styled.input<propsInpit>`
    background: #f0f0f0;
    border-radius: 16px;
    border: ${(props) => (props.error ? '2px solid #cc1f1f' : 'none')};
    font-size: 18px;
    line-height: 22px;
    color: #2d3436;
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

type TOptionWrapperProps = {
    width?: string;
    active: boolean;
};

const OptionWrapper = styled.div<TOptionWrapperProps>`
    padding-top: 16px;
    margin-top: -11px;
    background-color: #f0f0f0;
    width: ${({ width }) => (width ? width : '0')};
    border-radius: 0px 0px 16px 16px;
    position: absolute;
    z-index: 3;
    overflow: hidden;
    display: ${({ active }) => (active ? 'block' : 'none')};
    top: ${({ active }) => (active ? '43px' : '-210%')};
    transition: 0.1s all ease-in-out;
`;

type TOptionProps = {
    width?: string;
};
const Option = styled.div<TOptionProps>`
    width: ${({ width }) => (width ? width : '0')};
    background-color: #f0f0f0;
    padding: 5px;

    &:hover {
        background-color: #f0f0f8;
    }
`;

type TSelectProps = {
    values?: string[];
    onChange?: (e: any) => void;
    placeholder?: string;
    checked?: boolean;
    id?: string;
    error?: boolean;
    width?: string;
    mr?: string;
    options: React.ReactNode[];
    disabled?: boolean;
};

const InputActive = styled.div`
    position: absolute;
    top: 13px;
`;

const Select: React.FC<TSelectProps> = ({
    error,
    options,
    placeholder,
    width,
    values,
    onChange,
    disabled,
    ...props
}) => {
    const [active, setActive] = React.useState(false);
    const [optionIndex, setOptionIndex] = React.useState<number>();

    React.useEffect(() => {
        if (disabled) {
            setOptionIndex(1);
        }
        if (optionIndex && !disabled) {
            onChange!(values![optionIndex - 1]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [optionIndex]);

    return (
        <SelectWrapperStyle
            onClick={setActive.bind(null, (prev) => {
                if (!disabled) return !prev;
                return prev;
            })}>
            <SelectStyle
                placeholder={optionIndex ? '' : placeholder}
                width={width}
                disabled={disabled}
                error={error}
                {...props}
            />
            {optionIndex && <InputActive>{options[optionIndex - 1]}</InputActive>}
            <OptionWrapper active={active} width={width}>
                {options.map((option, index) => (
                    <Option
                        onClick={setOptionIndex.bind(null, index + 1)}
                        key={Date.now().toString() + index}
                        width={width}>
                        {option}
                    </Option>
                ))}
            </OptionWrapper>
        </SelectWrapperStyle>
    );
};

export default Select;
