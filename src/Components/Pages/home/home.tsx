import React from "react";
import useWindowSize from "../../../hooks/use_window_size";
import { Button } from "../../button";
import {
    Card,
    CardBody,
    CardInfo,
    CardInfoName,
    CardInfoValue,
    CardTitle,
    ClaimType,
    Link,
    PaginateArrow,
    Paginater,
    PaginateWrapper,
    Table,
    TableBody,
    TableHader,
    Td,
    Th,
    Title,
    Tr,
    Wrapper,
} from "./style";

const Home = () => {
    const width = useWindowSize()[0];

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
                            <Th>Title</Th>
                            <Th>Created</Th>
                            <Th>Type</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </TableHader>
                    <TableBody>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="success">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="danger"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="danger">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="primary"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="primary">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="success"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="warning">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="warning"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="danger">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="danger"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="danger">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="danger"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="danger">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="none"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="danger">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="danger"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="danger">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="danger"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Figma smart web system for to build</Td>
                            <Td>12/04/2021</Td>
                            <Td>
                                <ClaimType type="danger">Hardware</ClaimType>
                            </Td>
                            <Td>
                                <Button
                                    bgColor="danger"
                                    textTransform="uppercase"
                                    width="142px"
                                    height="32px"
                                >
                                    declined
                                </Button>
                            </Td>
                            <Td>
                                <Link>Browse</Link>
                            </Td>
                        </Tr>
                    </TableBody>
                </Table>
            ) : (
                <>
                    <Card>
                        <CardTitle>Figma smart web system for to build</CardTitle>
                        <CardBody>
                            <CardInfo>
                                <CardInfoName>Created</CardInfoName>
                                <CardInfoValue>12/04/2021</CardInfoValue>
                            </CardInfo>
                            <CardInfo>
                                <CardInfoName>Type</CardInfoName>
                                <CardInfoValue>
                                    <ClaimType type="danger">Hardware</ClaimType>
                                </CardInfoValue>
                            </CardInfo>
                            <CardInfo>
                                <CardInfoName>Status</CardInfoName>
                                <CardInfoValue>
                                    <Button
                                        bgColor="danger"
                                        textTransform="uppercase"
                                        width="142px"
                                        height="32px"
                                    >
                                        declined
                                    </Button>
                                </CardInfoValue>
                            </CardInfo>
                            <Button bgColor="none" height="52px" width="84px">
                                Browse
                            </Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardTitle>Figma smart web system for to build</CardTitle>
                        <CardBody>
                            <CardInfo>
                                <CardInfoName>Created</CardInfoName>
                                <CardInfoValue>12/04/2021</CardInfoValue>
                            </CardInfo>
                            <CardInfo>
                                <CardInfoName>Type</CardInfoName>
                                <CardInfoValue>
                                    <ClaimType type="danger">Hardware</ClaimType>
                                </CardInfoValue>
                            </CardInfo>
                            <CardInfo>
                                <CardInfoName>Status</CardInfoName>
                                <CardInfoValue>
                                    <Button
                                        bgColor="danger"
                                        textTransform="uppercase"
                                        width="142px"
                                        height="32px"
                                    >
                                        declined
                                    </Button>
                                </CardInfoValue>
                            </CardInfo>
                            <Button bgColor="none" height="52px" width="84px">
                                Browse
                            </Button>
                        </CardBody>
                    </Card>
                </>
            )}
            <PaginateWrapper>
                <PaginateArrow arrow="left">
                    <span></span> <span></span>
                </PaginateArrow>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <Paginater>1</Paginater>
                <PaginateArrow arrow="right">
                    <span></span> <span></span>
                </PaginateArrow>
            </PaginateWrapper>
        </>
    );
};

export default Home;
