import * as types from "redux/constants/food.constants";
const initialState = {
    foods: [],
    totalPageNum: 1,
    loading: false,
    createdFood: {},
};

const foodReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // POST food
        case types.POST_FOOD_REQUEST:
            return { ...state, loading: true };
        case types.POST_FOOD_SUCCESS:
            return {
                ...state,
                createdFood: payload,
                loading: false,
            };
        case types.POST_FOOD_FAILURE:
            return { ...state, loading: false };

        // search food
        case types.POST_SEARCH_FOODS_REQUEST:
            return { ...state, loading: true };
        case types.POST_SEARCH_FOODS_SUCCESS:
            return {
                ...state,
                foods: payload,
                totalPageNum: payload.totalPages,
                loading: false,
            };
        case types.POST_SEARCH_FOODS_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default foodReducer;
