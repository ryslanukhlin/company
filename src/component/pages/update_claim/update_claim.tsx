import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { SERVER_URI } from '../../../config';
import { TRootState } from '../../../store/store';
import { Button } from '../../button';
import { ClaimType } from '../../claim_type';
import Form from '../../form';
import { FormGroup } from '../../form_group';
import Input from '../../input';
import { Label } from '../../label';
import { Title } from '../../page_title';
import Select from '../../select';

interface TDataRequest {
    _id: string;
    title: string;
    description: string;
    type: Type;
    status: Type;
    user: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface Type {
    name: string;
    slug: string;
}

type TPropsUpdateClaim = {
    token?: string;
};

const WrappaeButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    ${Button} {
        margin-bottom: 20px;
    }
`;

const UpdateClaim: React.FC<TPropsUpdateClaim> = ({ token }) => {
    const [title, setTitle] = React.useState('Figma smart web system for to build');
    const [type, setType] = React.useState<Type>();
    const [description, setDescription] = React.useState('Some claim description here');

    const params = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchClaim() {
            const request = await fetch(SERVER_URI + '/claim/' + params.id, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });

            const data: TDataRequest = await request.json();

            setTitle(data.title);
            setType(data.type);
            setDescription(data.description);
        }
        fetchClaim();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateClain = async (status: 'done' | 'decl') => {
        const request = await fetch(SERVER_URI + '/claim/' + params.id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({
                title: title,
                description: description,
                type: type?.slug,
                status: status,
            }),
        });

        const data: TDataRequest = await request.json();
        if (data._id) navigate('/');
    };

    return (
        <>
            <Title>Incoming claim</Title>
            <Form>
                <FormGroup>
                    <Label>TITLE</Label>
                    <Input value={title} disabled width="589px" />
                </FormGroup>
                <FormGroup>
                    <Label>TYPE</Label>
                    <Select
                        width="589px"
                        disabled
                        options={[
                            <ClaimType
                                disabled
                                type={
                                    type?.slug === 'hard'
                                        ? 'success'
                                        : type?.slug === 'soft'
                                        ? 'danger'
                                        : type?.slug === 'net'
                                        ? 'warning'
                                        : 'primary'
                                }>
                                {type?.name}
                            </ClaimType>,
                        ]}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>DESCRIPTION</Label>
                    <Input
                        value={description}
                        disabled
                        width="589px"
                        placeholder="Figma smart web system for to build"
                    />
                </FormGroup>
            </Form>
            <WrappaeButtons>
                <Button
                    onClick={() => navigate('/')}
                    width="82px"
                    mr="24px"
                    height="48px"
                    bgColor="none">
                    Cancel
                </Button>
                <Button
                    onClick={updateClain.bind(null, 'done')}
                    width="82px"
                    mr="24px"
                    height="48px"
                    bgColor="success">
                    Done
                </Button>
                <Button
                    onClick={updateClain.bind(null, 'decl')}
                    width="82px"
                    height="48px"
                    bgColor="danger">
                    Decline
                </Button>
            </WrappaeButtons>
        </>
    );
};

const mapStateToProps = (state: TRootState) => ({
    token: state.authReducer.user?.token,
});

export default connect(mapStateToProps)(UpdateClaim);
