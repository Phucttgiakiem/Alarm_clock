import "./messageAlarm.css";
import { useState,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm";
import {Data_itemAlarm} from "../../../redux/actions/Data_itemAlarm";
export default function MessageAlarm () {
    const [message,setMessage] = useState ("");
    const dispatch = useDispatch();
    const datadialog = useSelector(state => state.Data_itemAlarmReducer.data)
    
    useEffect(() => {
        if (datadialog && datadialog.message) {
            setMessage(datadialog.message);
        }
    }, [datadialog]);
    const update_status = () => {
        dispatch(Data_itemAlarm({message:message}));
        dispatch(Type_dialog("ChooseMusic"));
    }
    return (
        <div className="wrapper_messageAlarm">
            <div className="Title">
                <img src="/emoji_question.png" className="emoij_img" alt="Alarm"/>
                <div>
                    <h4>Do you have any message to add to the alarm?</h4>
                    <h6>Maximum 250 character</h6>
                </div>
            </div>
            <div className="wrapper_message">
                <input 
                    type="text" 
                    placeholder="typing character here !!!" 
                    maxLength="250" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
            </div>
            <div className="wrapper_footer">
                <button onClick={() => update_status()}>Next step</button>
            </div>
        </div>
    )
}