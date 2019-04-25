import {
    CONTAINER_SIZE
} from 'ActionTypes';


const initialState = {
    containerSize: {
        with: 0,
        height: 0
    }
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case CONTAINER_SIZE:
            // get the size
            return {
                containerSize: {
                    width: action.width,
                    height: action.height
                }
            };
        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}