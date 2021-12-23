import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 998px) {
        margin-bottom: 33px;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 56px;
`;

export const TableHader = styled.thead`
    height: 56px;
    background: #f1f1f1;
`;

export const TableBody = styled.tbody`
    position: relative;
`;

export const Tr = styled.tr`
    border-top: 1px solid #c2c2c2;

    &:first-child {
        border-top: none;
    }
`;

export const ThStyle = styled.th`
    font-size: 18px;
    line-height: 22px;
    color: #2d3436;
    text-align: left;

    &:first-child {
        padding-left: 24px;
    }
`;

export const ThTxt = styled.div`
    position: relative;
    width: fit-content;
`;

type TArrowProps = {
    active?: boolean;
};

export const ArrowTop = styled.div<TArrowProps>`
    position: absolute;
    border: 4px solid transparent;
    border-bottom: 3px solid ${(props) => (props.active ? 'black' : '#c2c2c2')};
    top: 3px;
    left: calc(100% + 20px);
`;
export const ArrowBottom = styled.div<TArrowProps>`
    position: absolute;
    border: 4px solid transparent;
    border-top: 3px solid ${(props) => (props.active ? 'black' : '#c2c2c2')};
    top: 13px;
    left: calc(100% + 20px);
`;

export const Td = styled.td`
    padding-bottom: 14px;
    padding-top: 14px;

    &:first-child {
        padding-left: 24px;
    }
`;

export const Link = styled.div`
    color: #148bff;
    text-decoration-line: underline;
    font-size: 16px;
    line-height: 20px;
`;

export const PaginateWrapper = styled.div`
    display: flex;
    justify-content: right;

    @media (max-width: 998px) {
        justify-content: center;
    }
`;

type PaginateArrowProps = {
    arrow: 'left' | 'right';
};

export const PaginateArrow = styled.div<PaginateArrowProps>`
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    position: relative;
    padding: 10px;
    width: 32px;
    height: 32px;
    margin-right: ${(props) => (props.arrow === 'left' ? '8px' : '0')};

    @media (max-width: 400px) {
        &:first-child {
            margin-right: 2px;
        }
    }

    @media (max-width: 400px) {
        width: 24px;
    }

    & span:first-child {
        position: absolute;
        display: block;
        width: 3px;
        background: #d9d9d9;
        height: 10px;
        transform: rotate(45deg);
        bottom: ${(props) => (props.arrow === 'left' ? '13px' : '7px')};
    }
    & span:last-child {
        position: absolute;
        display: block;
        width: 3px;
        background: #d9d9d9;
        height: 10px;
        transform: rotate(-45deg);
        bottom: ${(props) => (props.arrow === 'left' ? '7px' : '13px')};
    }
`;

type TPaginateProps = {
    active: boolean;
};

export const Paginater = styled.div<TPaginateProps>`
    border-radius: 2px;
    border: 1px solid ${(props) => (props.active ? '#7DB59A' : '#d9d9d9')};
    width: 32px;
    height: 32px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    margin-bottom: 18px;

    @media (max-width: 400px) {
        margin-right: 2px;
    }
`;

export const Card = styled.div`
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    height: 250px;
    margin-bottom: 30px;
`;

export const CardTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    background: #7db59a;
    letter-spacing: 0.25px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    border-radius: 6px 16px 0px 0px;
    color: white;
`;

export const CardBody = styled.div`
    padding: 24px 16px 32px;
`;

export const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

export const CardInfoName = styled.div``;

export const CardInfoValue = styled.div``;

export const DotsPaginate = styled.div`
    color: rgba(0, 0, 0, 0.25);
    font-size: 14px;
    line-height: 32px;
    margin-right: 14px;
    margin-left: 7px;

    @media (max-width: 400px) {
        margin-right: 2px;
        margin-left: 0px;
    }
`;
