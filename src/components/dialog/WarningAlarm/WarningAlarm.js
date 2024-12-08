import "./WarningAlarm.css"
import { useDispatch } from "react-redux";
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm"
import { TurnOff_dialog } from "../../../redux/actions/TurnOff_Dialog";
import { Data_itemAlarm } from "../../../redux/actions/Data_itemAlarm";
export default function WarningAlarm () {
    const dispatch = useDispatch();
    const update_status = (status_of_dialog) => {
        dispatch(Type_dialog(status_of_dialog));
    }
    const handle_cancelDialog = () => {
        dispatch(Data_itemAlarm({}))
        dispatch(Type_dialog(""))
        dispatch(TurnOff_dialog())
    }
    return (
        <div className="wrapper_warningalarm">
            <div className="wrapper_titlewarning">
                <h4>Are you sure to finish setting the alarm time?</h4>
            </div>
            <div className="wrapper_footerwarning">
                <button onClick={() => handle_cancelDialog()}>Cancel</button>
                <button onClick={() => update_status("SuccessAlarm")}>OK</button>
            </div>
        </div>
    );
}