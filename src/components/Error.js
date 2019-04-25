import React, { useCallback } from 'react';
import styles from 'Less/style.module';
import { useMappedState } from "redux-react-hook";

function Error({error}) {
    // get container size
    const mapState = useCallback(state => state.publicReducer.containerSize, []);
    const { width, height } = useMappedState(mapState);
    return (
        <div className={styles['v-m-center']} style={{ width: width, height: height }}>
            {error}
        </div>
    )
}

export default Error;
