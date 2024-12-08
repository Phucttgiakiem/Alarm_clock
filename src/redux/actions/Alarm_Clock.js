export const startAlarm = (id) => {
    return {
        type: "START_ALARM",
        payload: id
    }
};
export const stopAlarm = (id) => {
    return {
        type: "STOP_ALARM",
        payload: id
    }
}
export const deleteAlarm = (id) => {
    return {
        type: "DELETE_ALARM",
        payload: id
    }
}
export const createAlarm = (payload)=> {
    return {
        type: "CREATE_ALARM",
        payload:payload
    }
}