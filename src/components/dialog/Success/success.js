import { useDispatch,useSelector } from "react-redux";
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm";
import { createAlarm } from "../../../redux/actions/Alarm_Clock";
import { TurnOff_dialog } from "../../../redux/actions/TurnOff_Dialog";
import { Data_itemAlarm } from "../../../redux/actions/Data_itemAlarm";
import "./success.css";
export default function Success () {
    const alarmsArray = useSelector((state) => state.Alarm_ClockReducer.data);
    const newalarm = useSelector(state => state.Data_itemAlarmReducer.data);
    const dispatch = useDispatch();
    const update_status = () => {
        dispatch(createAlarm([...alarmsArray,{id:`${alarmsArray.length === 0 ? 1:alarmsArray.length + 1}-${newalarm.alarmHour}-${newalarm.alarmMinute}`,...newalarm,isActive:true}]))
        dispatch(Type_dialog(""));
        dispatch(Data_itemAlarm({}));
        dispatch(TurnOff_dialog());
    }
    setTimeout(()=> {
        update_status();
    },2000)
    return (
        <div className="wrapper_successAlarm">
            <div className="wrapper_titlesuccess">
                <h4>You have successfully set the alarm !!!</h4>
            </div>
            <div className="wrapper_mainsuccess">
                <img src="/check.png"/>
            </div>
        </div>
    );
}