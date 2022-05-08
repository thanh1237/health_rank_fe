import * as types from "redux/constants/dailyIntake.constants";
import api from "redux/api";

const getDailyIntakeByAuthor = (id) => async (dispatch) => {
    dispatch({ type: types.GET_DAILY_INTAKE_REQUEST, payload: null });
    try {
        const res = await api.get(`/dailyIntake/${id}`);
        dispatch({ type: types.GET_DAILY_INTAKE_SUCCESS, payload: res.data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: types.GET_DAILY_INTAKE_FAILURE, payload: error });
    }
};

export const dailyIntakeAction = { getDailyIntakeByAuthor };
