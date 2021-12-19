import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SERVER_URI } from '../../../config';
import { TRootState } from '../../../store/store';
import { Button } from '../../button';
import { ClaimType } from '../../claim_type';
import Form from '../../form';
import { FormGroup } from '../../form_group';
import Input from '../../input';
import { ErrorInputMessage } from '../../input_error';
import { Label } from '../../label';
import { Title } from '../../page_title';
import Select from '../../select';

type TPropsCreateClaim = {
    token?: string;
};

const CreateClaim: React.FC<TPropsCreateClaim> = ({ token }) => {
    const [title, setTitle] = React.useState('');
    const [type, setType] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [errorTitle, setErrorTitle] = React.useState<string>();
    const [errorType, setErrorType] = React.useState<string>();
    const [errorDescription, setErrorDescription] = React.useState<string>();

    const navigate = useNavigate();

    const updateClaim = (type: string) => {
        setType(type);
    };

    const createClaim = async () => {
        setErrorTitle(undefined);
        setErrorType(undefined);
        setErrorDescription(undefined);
        if (!title) {
            setErrorTitle('title empty');
            return;
        }

        if (!type) {
            setErrorType('type empty');
            return;
        }

        if (!description) {
            setErrorDescription('description epmty');
            return;
        }

        const request = await fetch(SERVER_URI + '/claim', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({
                title: title,
                description: description,
                type: type,
                status: 'new',
            }),
        });

        const data = await request.json();
        if (data._id) navigate('/');
    };

    return (
        <>
            <Title>Creating new claim</Title>
            <Form mb="12px">
                <FormGroup mb="0px">
                    <Label>TITLE</Label>
                    <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        width="589px"
                        placeholder="Type claim title"
                    />
                    <ErrorInputMessage>{errorTitle}</ErrorInputMessage>
                </FormGroup>
                <FormGroup mb="0px">
                    <Label>TYPE</Label>
                    <Select
                        values={['hard', 'soft', 'net', 'troublesh']}
                        onChange={updateClaim}
                        options={[
                            <ClaimType type="success">Hardware</ClaimType>,
                            <ClaimType type="danger">Software</ClaimType>,
                            <ClaimType type="primary">Troubleshooting</ClaimType>,
                            <ClaimType type="warning">Networking</ClaimType>,
                        ]}
                        placeholder="Select type"
                        width="589px"
                    />
                    <ErrorInputMessage>{errorType}</ErrorInputMessage>
                </FormGroup>
                <FormGroup mb="0px">
                    <Label>DESCRIPTION</Label>
                    <Input
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        width="589px"
                        placeholder="Type claim description"
                    />
                    <ErrorInputMessage>{errorDescription}</ErrorInputMessage>
                </FormGroup>
            </Form>
            <Button
                onClick={() => navigate('/')}
                mr="23px"
                height="48px"
                width="82px"
                bgColor="none">
                Cancel
            </Button>
            <Button onClick={createClaim} height="48px" width="82px" bgColor="success">
                Create
            </Button>
        </>
    );
};

const mapStateToProps = (state: TRootState) => ({
    token: state.authReducer.user?.token,
});

export default connect(mapStateToProps)(CreateClaim);
