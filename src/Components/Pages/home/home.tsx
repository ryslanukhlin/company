import React from "react";
import { connect } from "react-redux";
import { SERVER_URI } from "../../../config";
import useWindowSize from "../../../hooks/use_window_size";
import { TRootState } from "../../../store/store";
import { Button } from "../../button";
import { Th } from "./home_th";
import {
    Card,
    CardBody,
    CardInfo,
    CardInfoName,
    CardInfoValue,
    CardTitle,
    ClaimType,
    DotsPaginate,
    Link,
    PaginateArrow,
    Paginater,
    PaginateWrapper,
    Table,
    TableBody,
    TableHader,
    Td,
    Title,
    Tr,
    Wrapper,
} from "./style";
import { Claim, TClaimRequest } from "./type";

const getDate = (date: string) => {
    const data = new Date(date);
    let day: number | string = data.getDay() + 1;
    let mounth: number | string = data.getMonth() + 1;

    if (day < 10) {
        day = "0" + day;
    }

    if (mounth < 10) {
        mounth = "0" + mounth;
    }

    return `${day}/${mounth}/${data.getFullYear()}`;
};

type THomeProps = {
    token: string | undefined;
    search: string;
};

const Home: React.FC<THomeProps> = ({ token, search }) => {
    const width = useWindowSize()[0];
    const [totalItems, setTotalItems] = React.useState<number>(0);
    const [claims, setClaims] = React.useState<Claim[]>([]);
    const [offset, setOffset] = React.useState(0);
    const [column, setColum] = React.useState<"title" | "createdAt" | "type" | "status">();
    const [sort, setSort] = React.useState<"asc" | "desc">();

    React.useEffect(() => {
        async function fetchData() {
            let queryParametrs = "?limit=10&offset=" + offset;

            if (column) queryParametrs += "&column=" + column;
            if (sort) queryParametrs += "&sort=" + sort;
            if (!!search) queryParametrs += "&search=" + search;

            const request = await fetch(SERVER_URI + "/claim" + queryParametrs, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            const data: TClaimRequest = await request.json();
            setTotalItems(data.totalItems);
            setClaims(data.claims);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, column, sort, search]);

    return (
        <>
            <Wrapper>
                <Title>Your claims</Title>
                <Button fs="18px" width="174px" height="48px">
                    Create claim
                </Button>
            </Wrapper>
            {width > 850 ? (
                <Table>
                    <TableHader>
                        <Tr>
                            <Th
                                rows
                                column="title"
                                setColum={setColum}
                                setSort={setSort}
                                sort={sort}
                                columnActive={column}
                            >
                                Title
                            </Th>
                            <Th
                                rows
                                column="createdAt"
                                setColum={setColum}
                                setSort={setSort}
                                sort={sort}
                                columnActive={column}
                            >
                                Created
                            </Th>
                            <Th
                                rows
                                column="type"
                                setColum={setColum}
                                setSort={setSort}
                                sort={sort}
                                columnActive={column}
                            >
                                Type
                            </Th>
                            <Th
                                rows
                                column="status"
                                setColum={setColum}
                                setSort={setSort}
                                sort={sort}
                                columnActive={column}
                            >
                                Status
                            </Th>
                            <Th>Actions</Th>
                        </Tr>
                    </TableHader>
                    <TableBody>
                        {claims.map((claim) => (
                            <Tr key={claim._id}>
                                <Td>{claim.title}</Td>
                                <Td>{getDate(claim.updatedAt)}</Td>
                                <Td>
                                    <ClaimType
                                        type={
                                            claim.type?.slug === "hard"
                                                ? "success"
                                                : claim.type?.slug === "soft"
                                                ? "danger"
                                                : claim.type?.slug === "net"
                                                ? "warning"
                                                : "primary"
                                        }
                                    >
                                        {claim.type?.name}
                                    </ClaimType>
                                </Td>
                                <Td>
                                    <Button
                                        bgColor={
                                            claim.status?.slug === "decl"
                                                ? "primary"
                                                : claim.status?.slug === "new"
                                                ? "danger"
                                                : claim.status?.slug === "done"
                                                ? "success"
                                                : "warning"
                                        }
                                        textTransform="uppercase"
                                        width="142px"
                                        height="32px"
                                    >
                                        {claim.status?.name}
                                    </Button>
                                </Td>
                                <Td>
                                    <Link>Browse</Link>
                                </Td>
                            </Tr>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                claims.map((claim) => (
                    <Card key={claim._id}>
                        <CardTitle>{claim.title}</CardTitle>
                        <CardBody>
                            <CardInfo>
                                <CardInfoName>Created</CardInfoName>
                                <CardInfoValue>{getDate(claim.createdAt)}</CardInfoValue>
                            </CardInfo>
                            <CardInfo>
                                <CardInfoName>Type</CardInfoName>
                                <CardInfoValue>
                                    <ClaimType
                                        type={
                                            claim.type?.slug === "hard"
                                                ? "success"
                                                : claim.type?.slug === "soft"
                                                ? "danger"
                                                : claim.type?.slug === "net"
                                                ? "warning"
                                                : "primary"
                                        }
                                    >
                                        {claim.type?.name}
                                    </ClaimType>
                                </CardInfoValue>
                            </CardInfo>
                            <CardInfo>
                                <CardInfoName>Status</CardInfoName>
                                <CardInfoValue>
                                    <Button
                                        bgColor={
                                            claim.status?.slug === "decl"
                                                ? "primary"
                                                : claim.status?.slug === "new"
                                                ? "danger"
                                                : claim.status?.slug === "done"
                                                ? "success"
                                                : "warning"
                                        }
                                        textTransform="uppercase"
                                        width="142px"
                                        height="32px"
                                    >
                                        {claim.status?.name}
                                    </Button>
                                </CardInfoValue>
                            </CardInfo>
                            <Button bgColor="none" height="52px" width="84px">
                                Browse
                            </Button>
                        </CardBody>
                    </Card>
                ))
            )}
            <PaginateWrapper>
                <PaginateArrow
                    onClick={setOffset.bind(null, (prev) =>
                        prev === 0 ? Math.ceil(totalItems / 10) * 10 - 10 : prev - 10,
                    )}
                    arrow="left"
                >
                    <span></span> <span></span>
                </PaginateArrow>
                {[...Array(Math.ceil(totalItems / 10))].map((value, index) => {
                    if (index * 10 > offset + 20 && index !== Math.ceil(totalItems / 10) - 1) {
                        if (index * 10 === offset + 30) {
                            return (
                                <DotsPaginate key={`${Date.now().toString() + index}`}>
                                    •••
                                </DotsPaginate>
                            );
                        }
                        return null;
                    }
                    if (index * 10 < offset - 20 && index !== 0) {
                        if (index * 10 === offset - 30) {
                            return (
                                <DotsPaginate key={`${Date.now().toString() + index}`}>
                                    •••
                                </DotsPaginate>
                            );
                        }
                        return null;
                    }
                    return (
                        <Paginater
                            onClick={setOffset.bind(null, index * 10)}
                            key={`${Date.now().toString() + index}`}
                            active={offset === index * 10}
                        >
                            {index + 1}
                        </Paginater>
                    );
                })}
                <PaginateArrow
                    onClick={setOffset.bind(null, (prev) =>
                        prev === Math.ceil(totalItems / 10) * 10 - 10 ? 0 : prev + 10,
                    )}
                    arrow="right"
                >
                    <span></span> <span></span>
                </PaginateArrow>
            </PaginateWrapper>
        </>
    );
};

const mapStateToProps = (state: TRootState) => ({
    token: state.authReducer.user?.token,
    search: state.pageReducer.search,
});

export default connect(mapStateToProps)(Home);
