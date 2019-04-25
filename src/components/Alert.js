import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'antd';
import styles from 'Less/style.module';
import alertApi from 'Actions/alert-actions';
import { useDispatch, useMappedState } from "redux-react-hook";

function RedefineAlert() {

  const dispatch = useDispatch();
  // fetch data
  const mapState = useCallback(state => ({
    alertState: state.alertReducer
  }), []);
  const { alertState } = useMappedState(mapState);
  const { type, text, visible } = alertState;


  const handleClose = () => {
    dispatch(alertApi('clear'))
  }


  useEffect(() => {
    if (!text) return;
    let id = setTimeout(() => {
      dispatch(alertApi('clear'))
    }, 1000);
    return () => clearTimeout(id)
  }, [text])


  return (
    <div className={styles.alert}>
      {
        visible && text ? (
          <Alert
            message={text}
            type={type}
            closable
            afterClose={handleClose}
          />
        ) : null
      }
      {/* <p>placeholder text here</p> */}
    </div>
  );
}

export default RedefineAlert;