import * as types from "redux/constants/rank.constants";
const initialState = {
    rank: {},
    totalPageNum: 1,
    loading: false,
};

const rankReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // GET Weight Storage
        case types.GET_RANK_REQUEST:
            return { ...state, loading: true };
        case types.GET_RANK_SUCCESS:
            return {
                ...state,
                rank: payload,
                totalPageNum: payload.totalPages,
                loading: false,
            };
        case types.GET_RANK_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default rankReducer;
