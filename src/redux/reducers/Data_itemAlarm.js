import { INIT_STATE } from "../../constant";

export const Data_itemAlarmReducer = (state = INIT_STATE.Data_Alarm_item,action) => {
    switch(action.type){
        case "update_data_alarm": return {
            ...state, data: Object.keys(action.payload).length === 0 ? {} : {
                ...state.data,
                ...action.payload
            }
        }
        default: return state
    }
}