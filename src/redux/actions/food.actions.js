import * as types from "redux/constants/food.constants";
import api from "redux/api";

const searchFood = (body) => async (dispatch) => {
    dispatch({ type: types.POST_SEARCH_FOODS_REQUEST, payload: null });
    try {
        const res = await api.post(`/food/searchFood`, body);
        dispatch({ type: types.POST_SEARCH_FOODS_SUCCESS, payload: res.data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: types.POST_SEARCH_FOODS_FAILURE, payload: error });
    }
};

const createFood = (body) => async (dispatch) => {
    dispatch({ type: types.POST_FOOD_REQUEST, payload: null });
    try {
        const res = await api.post(`/food`, body);
        dispatch({ type: types.POST_FOOD_SUCCESS, payload: res.data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: types.POST_FOOD_FAILURE, payload: error });
    }
};

export const foodActions = { searchFood, createFood };
