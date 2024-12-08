import "./screendialog.css";
import { useSelector } from "react-redux"
import MusicAlarm from "./MusicAlarm/MusicAlarm"
import TimerAlarm from "./timerAlarm/timerAlarm"
import MessageAlarm from "./messageAlarm/messageAlarm"
import WarningAlarm from "./WarningAlarm/WarningAlarm";
import Success from "./Success/success";
import AlarmInform from "./AlarmInform/AlarmInform";
import DetaitInform from "./DetailInform/DetaitInform";
export default function Screendialog () {
    const typedialog = useSelector(state => state.Dialog_AlarmReducer.type_dialog)
    const TypeDialog = () => {
        switch(typedialog){
            case "ChooseMusic":
                return <MusicAlarm/>
            case "TimerAlarm":
                return <TimerAlarm/>
            case "WarningAlarm": 
                return <WarningAlarm/>
            case "SuccessAlarm":
                return <Success/>
            case "Alarm":
                return <AlarmInform/>
            case "Detail_alarm":
                return <DetaitInform />
            default: return <MessageAlarm/>
        }
    }
    return (
        <div className="wrapper_dialog">
            {
                TypeDialog()
            }
        </div>
    )
}