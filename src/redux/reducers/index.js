import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import weightReducer from "./weight.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";
import rankReducer from "redux/reducers/rank.reducer";
import dailyIntakeReducer from "redux/reducers/dailyIntake.reducer";
import foodReducer from "redux/reducers/food.reducer";

export default combineReducers({
    auth: authReducer,
    weight: weightReducer,
    route: routeReducer,
    user: userReducer,
    rank: rankReducer,
    dailyIntake: dailyIntakeReducer,
    food: foodReducer,
});
