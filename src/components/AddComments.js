import React, { useEffect, useCallback, useState, useRef } from 'react';
import _ from 'lodash';
import styles from 'Less/style.module';
import {
    Input
} from 'antd';

import { Control, Form, Errors, actions } from 'react-redux-form';
import { submitCommentsApi } from '../redux/formApi';
import stores from "../redux/config-store";


import {
    getCommentsApi,
    delCommentsApi,
    alertApi,
    patchApi
} from 'Api';

import { useDispatch, useMappedState } from "redux-react-hook";

import moment from 'moment';
import { Icon, Skeleton } from 'antd';

import {
    List, Avatar
} from 'antd';

import Alert from './Alert';

import Spin from 'Spin';


const uuidv4 = require('uuid/v4')
const { TextArea } = Input;
const store = stores.storeform;


function AddComments() {

    const dispatch = useDispatch();
    const formDispatch = store.dispatch;
    // fetch data
    const mapState = useCallback(state => ({
        commentsState: state.commentsReducer,
        alertState: state.alertReducer
    }), []);
    const { commentsState } = useMappedState(mapState);
    const { loading, error } = commentsState;

    // delete data 
    const mapStateDel = useCallback(state => state.delCommentsReducer, []);
    const storeStatesDel = useMappedState(mapStateDel);

    let delSuccess = storeStatesDel.success;
    let delLoading = storeStatesDel.loading;
    let delError = storeStatesDel.error;


    const [allComments, setAllComments] = useState([]);
    let getRef = useRef(null)

    let itemsLen = allComments && allComments.length;


    const [page, setpage] = useState(1);

    const [amount, setAmount] = useState(0);

    const fetchComments = useCallback(val => {
        dispatch(getCommentsApi({ page: page, limit: val }))
            .then(v => {
                console.log('88888')
                console.log(v)
                if (!(_.isArray(v))) return;
                // get the back datas
                if (v.length < val) {
                    setloadMore('No More Datas.')
                }
                if (page === 1) {
                    setAllComments(_.concat(allComments, v.map(comment => ({ ...comment, loading: false }))));
                } else {
                    setAllComments(_.concat(allComments, v.map(comment => ({ ...comment, loading: true }))));
                }
                getRef.current = setTimeout(() => setAllComments(_.concat(allComments, v.map(comment => ({ ...comment, loading: false })))), 400);
            })
    }, [dispatch, page])

    // get comments amount
    const getCommentsAmount = useCallback(() => {
        dispatch(getCommentsApi())
            .then(v => {
                setAmount(v.length);
            })
    }, [])


    useEffect(() => {
        // getCommentsAmount()
        fetchComments(4);
        return () => {
            clearTimeout(getRef.current);
        }
    }, [fetchComments])


    // loadingmore
    const [loadMore, setloadMore] = useState('Loading More');

    const loadingMore = () => {
        if (loadMore === 'No More Datas.') return;
        setpage(page + 1);
    }

    const handleSubmit = (comments) => {

        const commentsMerge = { ...comments, id: uuidv4(), time: Date.now() }
        formDispatch(submitCommentsApi({ data: commentsMerge, modal: "addComments" })).then(res => {
            // res=1 success res =0 failure
            if (res) {
                dispatch(alertApi('success', `Submit Successful!`));
                setAllComments([commentsMerge, ...allComments]);
                getCommentsAmount()
            } else {
                dispatch(alertApi('warning', `Submit Failure, do it again!`));
            }
        })
    }

    // delete data = id, meanwhile getCommentsApi again
    const deleteItem = id => dispatch(delCommentsApi({ id })).then(res => {
        if (res) {

            dispatch(alertApi('success', 'Delete Successfully!'));
            setAllComments(_.filter(allComments, v => v.id !== id));
            getCommentsAmount()
            // setpage(page + 1);
        } else {
            dispatch(alertApi('success', 'Does not Delete!'));
        }
    });


    // dispatch comments

    const [isPatch, setisPatch] = useState(false);

    const editItem = ({ id, title, description }) => {
        formDispatch(actions.change('addComments.title', title));
        formDispatch(actions.change('addComments.description', description));
        formDispatch(actions.change('addComments.id', id));
        setisPatch(true)
    }

    const saveSubmit = (comments) => {
        const commentsMerge = { ...comments, time: Date.now() }
        formDispatch(patchApi(commentsMerge)).then(res => {
            // res={id,title,description,time}
            if (res.id) {
                dispatch(alertApi('success', `Patch Successful!`));
                formDispatch(actions.reset('addComments'));
                setisPatch(false)

                //patch allComments 
                const updateAllComments = allComments.map(v => {
                    if (v.id === comments.id) {
                        v.title = comments.title;
                        v.description = comments.description;
                        v.time = commentsMerge.time;
                    }
                    return v;
                }).sort((a, b) => b.time - a.time)
                //  updateAllComments 
                setAllComments(updateAllComments)
            } else {
                dispatch(alertApi('warning', `Patch Failure, do it again!`));
            }
        })
    }

    // dispatch(patchApi({ id })).then(res => {
    //     if (res) {

    //         dispatch(alertApi('success', 'Delete Successfully!'));
    //         setAllComments(_.filter(allComments, v => v.id !== id));
    //         getCommentsAmount()
    //         // setpage(page + 1);
    //     } else {
    //         dispatch(alertApi('success', 'Does not Delete!'));
    //     }
    // })

    return (
        <div>
            <div>Amount:{amount}</div>
            <Alert />
            <List
                className="demo-loadmore-list"
                loading={
                    page > 1 ?
                        false :
                        loading ? { indicator: <Spin loading={loading} /> } : false
                }
                itemLayout="horizontal"
                loadMore={<div style={{ textAlign: 'center', padding: '10px', color: '#bbb' }} onClick={loadingMore}>{loadMore}</div>}
                dataSource={allComments}
                renderItem={item => (
                    <List.Item actions={[<div onClick={() => editItem({ id: item.id, title: item.title, description: item.description })}><a>EDIT</a></div>, <div onClick={() => deleteItem(item.id)}><a>DELETE</a></div>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<span>{item.title}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#bbb', fontWeight: 100 }}>{moment(item.time).fromNow()}</span> </span>}
                                description={`${item.description}:${item.loading}`}
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />

            <Form
                model="addComments"
                onSubmit={(comments) => isPatch ? saveSubmit(comments) : handleSubmit(comments)}
            >
                <div className={styles['form-field']}>

                    <label htmlFor="addComments.title">
                        Title:
                </label>
                    <Control.text
                        model="addComments.id"
                        id="addComments.id"
                        style={{ display: 'none' }}
                    />
                    <Control.text
                        model="addComments.title"
                        id="addComments.title"
                        component={Input}
                        validators={{
                            required: (val) => val && val.length
                        }}
                    />
                    <Errors
                        model="addComments.title"
                        className={styles['hit-red']}
                        messages={{
                            required: 'Please input title.',
                        }}
                    />
                </div>

                <div className={styles['form-field']}>
                    <label htmlFor="addComments.description">Description:</label>
                    <Control.textarea
                        rows={6}
                        model="addComments.description"
                        id="addComments.description"
                        component={TextArea}
                        validators={{
                            required: (val) => val && val.length
                        }}
                    />
                    <Errors
                        model="addComments.description"
                        className={styles['hit-red']}
                        messages={{
                            required: 'Please input description.',
                        }}
                    />
                </div>

                <div className={styles['btn-primary']}>
                    <button className="ant-btn ant-btn-primary" type="submit">
                        {
                            isPatch ? 'Save' : 'Submit'
                        }
                    </button>
                </div>

            </Form>
        </div >
    );
}


export default AddComments;
