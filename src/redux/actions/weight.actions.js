import * as types from "redux/constants/weight.constants";
import api from "redux/api";
import { toast } from "react-toastify";
import { routeActions } from "redux/actions/route.actions";

const getWeightStorageByUser = (id) => async (dispatch) => {
    dispatch({ type: types.GET_WEIGHTS_STORAGE_REQUEST, payload: null });
    try {
        const res = await api.get(`/weightStorage/${id}`);
        dispatch({ type: types.GET_WEIGHTS_STORAGE_SUCCESS, payload: res.data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: types.GET_WEIGHTS_STORAGE_FAILURE, payload: error });
    }
};

const createWeightStorageByUser = (body) => async (dispatch) => {
    dispatch({ type: types.POST_WEIGHTS_STORAGE_REQUEST, payload: null });
    try {
        const res = await api.post(`/weightStorage`, body);
        dispatch({ type: types.POST_WEIGHTS_STORAGE_SUCCESS, payload: res.data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: types.POST_WEIGHTS_STORAGE_FAILURE, payload: error });
    }
};

const createWeightByUser = (body) => async (dispatch) => {
    dispatch({ type: types.POST_WEIGHTS_REQUEST, payload: null });
    try {
        const res = await api.post(`/weights`, body);
        dispatch({ type: types.POST_WEIGHTS_SUCCESS, payload: res.data.data });
        dispatch(routeActions.redirect("/"));
    } catch (error) {
        console.log(error);
        dispatch({ type: types.POST_WEIGHTS_FAILURE, payload: error });
    }
};

export const weightActions = { getWeightStorageByUser, createWeightStorageByUser, createWeightByUser };
