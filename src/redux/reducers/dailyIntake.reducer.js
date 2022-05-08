import * as types from "redux/constants/dailyIntake.constants";
const initialState = {
    dailyIntake: {},
    loading: false,
};

const dailyIntakeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_DAILY_INTAKE_REQUEST:
            return { ...state, loading: true };
        case types.GET_DAILY_INTAKE_SUCCESS:
            return {
                ...state,
                dailyIntake: payload,
                loading: false,
            };
        case types.GET_DAILY_INTAKE_FAILURE:
            return { ...state, loading: false };

        default:
            return state;
    }
};

export default dailyIntakeReducer;
