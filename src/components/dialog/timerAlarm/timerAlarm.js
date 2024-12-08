import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm"
import {Data_itemAlarm} from "../../../redux/actions/Data_itemAlarm";
import "./timerAlarm.css"
export default function TimerAlarm() {
    const [chooseHour,setChooseHour] = useState(null);
    const [chooseMinute,setChooseMinute] = useState(null);
    const dispatch = useDispatch()
    const update_status = (status_of_dialog) => {
            dispatch(Type_dialog(status_of_dialog));
            UpdatetimerAlarm();
    }
    const appendZero = (value) => (value < 10 ? "0" + value : value);
    const GetcurrentTime = () => {
        let date = new Date();
        setChooseHour(date.getHours());
        setChooseMinute(date.getMinutes());
    }
    const ChooseHour = () => {
        let options = [];
        for (let item = 0; item <= 24; item++) {
            options.push(
                <option key={item} value={item}>
                    {item}
                </option>
            );
        }
        return options;
    };

    const ChooseMinute = () => {
        let options = [];
        for (let item = 0; item <= 59; item++) {
            options.push(
                <option key={item} value={item}>
                    {item}
                </option>
            );
        }
        return options;
    };
    const UpdatetimerAlarm = () => {
        dispatch(Data_itemAlarm({
            alarmHour: appendZero(chooseHour),
            alarmMinute: appendZero(chooseMinute)
        }))
    }
    useEffect(() => {
        GetcurrentTime();
    },[])
    return (
        <div className="wrapper_timerAlarm">
            <div className="Title_timerAlarm">
                <h4>What time do you want to set the alarm time?</h4>
            </div>
            <div className="main_timerAlarm">
                <div>
                    <select value={chooseHour} onChange={(e) => setChooseHour(e.target.value)}>{ChooseHour()}</select>
                </div>
                <div>
                    <h4>:</h4>
                </div>
                <div>
                    <select value={chooseMinute} onChange={(e) => setChooseMinute(e.target.value)}>{ChooseMinute()}</select>
                </div>
            </div>
            <div className="footer_timerAlarm">
                <button onClick={() => update_status("ChooseMusic")}>Prev step</button>
                <button onClick={() => update_status("WarningAlarm")}>Next step</button>
            </div>
        </div>
    );
}
