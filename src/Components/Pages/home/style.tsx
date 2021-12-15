import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    color: black;
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

export const TableBody = styled.tbody``;

export const Tr = styled.tr`
    border-top: 1px solid #c2c2c2;
`;

export const Th = styled.th`
    font-size: 18px;
    line-height: 22px;
    color: #2d3436;
    text-align: left;

    &:first-child {
        padding-left: 24px;
    }
`;

export const Td = styled.td`
    padding-bottom: 14px;
    padding-top: 14px;

    &:first-child {
        padding-left: 24px;
    }
`;

type ClainTypeProps = {
    type: "primary" | "success" | "danger" | "warning";
};

export const ClaimType = styled.p<ClainTypeProps>`
    padding-left: 40px;
    color: #2d3436;
    font-size: 16px;
    line-height: 20px;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        border-radius: 50%;
        position: relative;
        width: 16px;
        height: 16px;
        background-color: ${(props) => props.theme.colors[props.type]};
        left: -103px;
        bottom: -2px;
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
    arrow: "left" | "right";
};

export const PaginateArrow = styled.div<PaginateArrowProps>`
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    position: relative;
    padding: 10px;
    width: 32px;
    height: 32px;
    margin-right: ${(props) => (props.arrow === "left" ? "8px" : "0")};

    & span:first-child {
        position: absolute;
        display: block;
        width: 3px;
        background: #d9d9d9;
        height: 10px;
        transform: rotate(45deg);
        bottom: ${(props) => (props.arrow === "left" ? "13px" : "7px")};
    }
    & span:last-child {
        position: absolute;
        display: block;
        width: 3px;
        background: #d9d9d9;
        height: 10px;
        transform: rotate(-45deg);
        bottom: ${(props) => (props.arrow === "left" ? "7px" : "13px")};
    }
`;
export const Paginater = styled.div`
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    width: 32px;
    height: 32px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    margin-bottom: 18px;
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
