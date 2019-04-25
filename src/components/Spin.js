import React,{useCallback} from 'react';
import { Spin, Icon } from "antd";
import styles from 'Less/style.module';
import { useMappedState } from "redux-react-hook";

function Spinner({ isInnner = true, loading }) {
    // get container size
    const mapState = useCallback(state => state.publicReducer.containerSize, []);
    const { width, height } = useMappedState(mapState);

    return (
        <div>
            {
                isInnner
                    ?
                    <Spin spinning={loading} delay={500} indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
                    :
                    <div className={styles['v-m-center']} style={{ width: width, height: height }}>
                        <Spin spinning={loading} delay={500} indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
                    </div>
            }
        </div>
    )
}

export default Spinner;
