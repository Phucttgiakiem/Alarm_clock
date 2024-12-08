import {useState,useEffect,useRef,createContext} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TurnOn_dialog } from '../../redux/actions/TurnOff_Dialog';
import ItemAlarm from "./ItemAlarm/ItemAlarm";
import "./Alarm.css";
import { Type_dialog } from '../../redux/actions/Dialog_Alarm';
import Screendialog from '../dialog/screendialog';
export const ActiveSoundsContext = createContext(null);
export const MessageContext = createContext(null);
export default function Alarm () {
    const [messageInfo,setMessageInfo] = useState("");
    let timerRef = useRef(null);
   // const activeSounds = useRef({});
    const alarmsArray =  useSelector((state) => state.Alarm_ClockReducer.data);
    const Turn_On_dialog = useSelector(state => state.Turn_OffReducer.TurnOff);
    const dispatch = useDispatch();
    // Dùng useRef để giữ giá trị alarmsArray mới nhất
    const alarmsArrayRef = useRef(alarmsArray);

    
    useEffect(() => {
        // Cập nhật lại alarmsArrayRef mỗi khi alarmsArray thay đổi
        alarmsArrayRef.current = alarmsArray;
    }, [alarmsArray]);
    const appendZero = (value) => (value < 10 && value.toString().length !== 2 ? "0" + value : value);

    const displayTimer = () => {
        let date = new Date();
        let [hours, minutes, seconds] = [
            appendZero(date.getHours()),
            appendZero(date.getMinutes()),
            appendZero(date.getSeconds()),
        ];
        //Display time
        timerRef.current.innerHTML = `${hours}:${minutes}:${seconds}`;
        for (let item of alarmsArrayRef.current) {
            if (item.isActive && `${item.alarmHour}:${item.alarmMinute}` === `${hours}:${minutes}`) {
              //  if (!activeSounds.current[`${item.alarmHour}:${item.alarmMinute}`]) {
                    // Nếu chưa phát âm thanh cho thời gian này
                    setMessageInfo(item);
                    item.namemusic.play();
                    item.namemusic.loop = true;
              //      activeSounds.current[`${item.alarmHour}:${item.alarmMinute}`] = item.namemusic; // Lưu âm thanh vào activeSounds
                    dispatch(TurnOn_dialog());
                    dispatch(Type_dialog("Alarm"))
                    break;
              //  }
            }
        }
    }
    
    useEffect(()=> {
        const interval = setInterval(displayTimer, 1000); // Cập nhật mỗi giây
        displayTimer(); // Gọi ngay khi component mount để hiển thị ngay giờ
        return () => clearInterval(interval); // Dọn dẹp khi unmount
    },[])
    return (
        <>
       
            <MessageContext.Provider value={messageInfo}>
                {!Turn_On_dialog && (
                        <Screendialog/>
                )}
            </MessageContext.Provider>
      
        <div className="wrappertimer">
            <div className="timer-display" ref={timerRef}>00:00:00</div>
            <div className="container">
                <button id="set" onClick={() => dispatch(TurnOn_dialog())}>Add Alarm</button>
                <div className="parentactiveAlarm">
                    <div className="activeAlarms">
                        {
                            alarmsArray.length > 0 && (
                                alarmsArray.map((item) => (
                                    <ItemAlarm key={item.id} alarmObj={item}/>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}