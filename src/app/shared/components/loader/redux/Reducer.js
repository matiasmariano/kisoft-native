import {
    LOADING_ON,
    LOADING_OFF
} from "./Action";

function getInitialState() {
    return {
        loading: false,
        currentLoader: 0
    }
}

function reducer(state = getInitialState(), action) {

    switch (action.type) {

        case LOADING_ON: {

            return {
                ...state,
                loading: true,
                currentLoader: state.currentLoader + 1,
            }
        }

        case LOADING_OFF: {
            let currentLoader = state.currentLoader - 1;
            let loading = currentLoader !== 0;

            return {
                ...state,
                loading: loading,
                currentLoader: currentLoader
            }
        }

        default:
            return state;
    }
}

export default reducer;