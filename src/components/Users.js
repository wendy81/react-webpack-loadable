import React, { useEffect, useCallback } from 'react';
import {
    getUsersApi
} from 'Api';
import { useDispatch, useMappedState } from "redux-react-hook";
import _ from 'lodash';

import Spin from 'Spin';
import Error from 'Error';

import { Card, Row, Col } from 'antd';


const { Meta } = Card;


function App() {
    const dispatch = useDispatch();
    const mapState = useCallback(state => state.userReducer, []);
    const storeStates = useMappedState(mapState);
    const { users, loading, error } = storeStates;

    useEffect(() => {
        dispatch(getUsersApi())
    }, [dispatch])

    const cards = _.map(users, item => (
        <Col key={item.id} span={8}>
            <Card
                hoverable
                style={{ marginBottom: 30 }}
                loading={loading}
                cover={<div>{item.title}</div>}
            >
                <Meta
                    title={item.title}
                    description={item.description}
                />
            </Card>
        </Col>)
    )


    return (
        <Row gutter={16}>
            {
                error ? <Error error={error} /> : null
            }
            {
                loading ? <Spin isInnner={false}  loading={loading}/> : cards
            }
        </Row>

    )
}

export default App;
