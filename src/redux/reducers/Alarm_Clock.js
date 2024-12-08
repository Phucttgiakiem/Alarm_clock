import { INIT_STATE } from "../../constant";

export const Alarm_ClockReducer = (state = INIT_STATE.Alarm_ago, action) => {
    switch (action.type) {
        case "START_ALARM": {
            return {
                ...state,
                data: state.data.map(item =>
                    item.id === action.payload
                        ? { ...item, isActive: true } // Cập nhật nếu id khớp
                        : item // Giữ nguyên nếu không khớp
                ),
            };
        }
        
        case "STOP_ALARM": {
            return {
                ...state,
                data: state.data.map(item =>
                    item.id === action.payload
                        ? { ...item, isActive: false } // Cập nhật nếu id khớp
                        : item // Giữ nguyên nếu không khớp
                ),
            };
        }

        case "DELETE_ALARM": {
            // Loại bỏ alarm theo id
            const filteredData = state.data.filter(item => item.id !== action.payload);
            return { ...state, data: filteredData };
        }

        case "CREATE_ALARM": {
            // Thêm alarm mới vào đầu mảng
            return { data: action.payload};
        }

        default:
            return state;
    }
};




