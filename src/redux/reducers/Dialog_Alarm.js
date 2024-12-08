import { INIT_STATE } from "../../constant";

export const Dialog_AlarmReducer = (state = INIT_STATE.Status_Dialog,action) => {
    switch(action.type) {
        case "Update_dialog":
            return {
                ...state,type_dialog: action.payload
            }
        default: return state
    }
}