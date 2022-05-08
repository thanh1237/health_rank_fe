import * as types from "redux/constants/rank.constants";
import api from "redux/api";

const getRank = (body) => async (dispatch) => {
    dispatch({ type: types.GET_RANK_REQUEST, payload: null });
    const { id, page, rowsPerPage } = body;
    try {
        const res = await api.get(`/rank/${id}?page=${page + 1}&limit=${rowsPerPage}`);
        dispatch({ type: types.GET_RANK_SUCCESS, payload: res.data.data });
    } catch (error) {
        console.log(error);
        dispatch({ type: types.GET_RANK_FAILURE, payload: error });
    }
};

export const rankAction = { getRank };
