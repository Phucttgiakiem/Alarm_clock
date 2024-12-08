import "./ItemAlarm.css";
//import { useContext } from "react";
import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { deleteAlarm,stopAlarm,startAlarm } from "../../../redux/actions/Alarm_Clock";
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm";
import { TurnOn_dialog } from "../../../redux/actions/TurnOff_Dialog";
import Cookies from "js-cookie";
//import { ActiveSoundsContext } from "../Alarm";
export default function ItemAlarm ({alarmObj}){
   // const activeSounds = useContext(ActiveSoundsContext);
    const dispatch = useDispatch();
    //key from object
    const {id,alarmHour,alarmMinute,isActive} = alarmObj

    const handleStopitem = () => {
        
        alarmObj.namemusic.pause();  // Dừng âm thanh
        alarmObj.namemusic.currentTime = 0;  // Đặt lại thời gian âm thanh về 0
            clearTimeout();
      //  delete activeSounds.current[`${alarmObj.alarmHour}:${alarmObj.alarmMinute}`];
        dispatch(stopAlarm(id))
    }

    const handleStartitem = () => {
        alarmObj.namemusic.currentTime = 0;
        dispatch(startAlarm(id));
    }

    const DetailAlarm = () => {
        if(alarmObj.message !== ""){
            Cookies.set("detail_item",alarmObj.message,{expires:1});
            dispatch(TurnOn_dialog());
            dispatch(Type_dialog("Detail_alarm"));
        }
    }

    const handleDeleteitem = () => {
        
        if (alarmObj.namemusic) {
            alarmObj.namemusic.pause();  // Dừng âm thanh
            alarmObj.namemusic.currentTime = 0;  // Đặt lại thời gian âm thanh về 0
        }
     //   delete activeSounds.current[`${alarmObj.alarmHour}:${alarmObj.alarmMinute}`];
        dispatch(deleteAlarm(id));
    }
    return (
        <div className="alarm" data-id={id}>
            <span>
                {alarmHour + ": " + alarmMinute}
            </span>
            <input type="checkbox" 
                checked={isActive}
                onChange={(e) => {
                    if (e.target.checked) {
                        handleStartitem(); // Bật nhạc
                    } else {
                        handleStopitem(); // Tắt nhạc
                    }
                }}
            />
            <button className="noteButton" onClick={() => DetailAlarm()}>
                <MdEventNote />
            </button>
            <button className="deleteButton" onClick={() => handleDeleteitem()}>
                <FaTrashAlt />
            </button>
        </div>
    )
}

