import * as types from "redux/constants/weight.constants";
const initialState = {
    weights: [],
    totalPageNum: 1,
    loading: false,
    weightStorage: [],
    createdWeightStorage: {},
    createdWeight: {},
};

const weightReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // GET Weight Storage
        case types.GET_WEIGHTS_STORAGE_REQUEST:
            return { ...state, loading: true };
        case types.GET_WEIGHTS_STORAGE_SUCCESS:
            return {
                ...state,
                weightStorage: payload,
                totalPageNum: payload.totalPages,
                loading: false,
            };
        case types.GET_WEIGHTS_STORAGE_FAILURE:
            return { ...state, loading: false };

        // POST Weight Storage
        case types.POST_WEIGHTS_STORAGE_REQUEST:
            return { ...state, loading: true };
        case types.POST_WEIGHTS_STORAGE_SUCCESS:
            return {
                ...state,
                createdWeightStorage: payload,
                totalPageNum: payload.totalPages,
                loading: false,
            };
        case types.POST_WEIGHTS_STORAGE_FAILURE:
            return { ...state, loading: false };

        // POST Weight
        case types.POST_WEIGHTS_REQUEST:
            return { ...state, loading: true };
        case types.POST_WEIGHTS_SUCCESS:
            return {
                ...state,
                createdWeight: payload,
                totalPageNum: payload.totalPages,
                loading: false,
            };
        case types.POST_WEIGHTS_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default weightReducer;
