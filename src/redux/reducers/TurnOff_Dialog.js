import { INIT_STATE } from "../../constant";

export const Turn_OffReducer = (state = INIT_STATE.On_Off_dialog,action) => {
    switch(action.type) {
        case "Turn_on_dialog":
            return {
                TurnOff: false
            }
        case "Turn_off_dialog":
            return {
                TurnOff: true
            }
        default: return state
    }
}