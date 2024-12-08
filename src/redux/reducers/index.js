import { combineReducers } from "redux";
import {Alarm_ClockReducer} from "./Alarm_Clock";
import {Dialog_AlarmReducer} from "./Dialog_Alarm";
import {Data_itemAlarmReducer} from "./Data_itemAlarm"
import { Turn_OffReducer } from "./TurnOff_Dialog";
export const allReducers = combineReducers({
    Alarm_ClockReducer,
    Dialog_AlarmReducer,
    Data_itemAlarmReducer,
    Turn_OffReducer
})