import "./AlarmInform.css";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { MessageContext } from "../../Alarm/Alarm";
//import { ActiveSoundsContext } from "../../Alarm/Alarm";
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm";
import { TurnOff_dialog } from "../../../redux/actions/TurnOff_Dialog";
import { stopAlarm } from "../../../redux/actions/Alarm_Clock";
export default function AlarmInform () {
    const message = useContext(MessageContext);
    const dispatch = useDispatch()
    const handleClose = () => {
        message.namemusic.pause();
        message.currentTime = 0;
        dispatch(stopAlarm(message.id));
        dispatch(Type_dialog(""));
        dispatch(TurnOff_dialog());
    }
    return (
        <div className="wrapper_dialogbasic">
            <div className="wrapper_titleAlarm">
                <img src="/icons8_alarm.gif" alt="Alarm"/>
                { 
                    message.message && (<p>{message.message}</p>)
                }
            </div>
            <div className="wrapper_footerAlarm">
                <button className="btn_Off_alarm" onClick={handleClose}>OK</button>
            </div>
        </div>
    );
}