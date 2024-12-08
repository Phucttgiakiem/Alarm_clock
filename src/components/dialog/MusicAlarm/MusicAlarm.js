import "./MusicAlarm.css"
import {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux"
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm";
import {Data_itemAlarm} from "../../../redux/actions/Data_itemAlarm";
export default function MusicAlarm() {
    const [namemusic, setNamemusic] = useState("/Phone_anime.mp3");
    const dispatch = useDispatch();
    const datadialog = useSelector((state) => state.Data_itemAlarmReducer.data);
    
    useEffect(() => {
        if (datadialog && datadialog.namemusic) {
            setNamemusic(datadialog.namemusic);
        }
    }, [datadialog]);

    const update_status = (status_of_dialog) => {
        dispatch(Data_itemAlarm({ namemusic:new Audio (namemusic) })); // Cập nhật namemusic vào Redux
        dispatch(Type_dialog(status_of_dialog));
    };

    return (
        <div className="wrapper_musicAlarm">
            <div className="Title_musicalarm">
                <h4>Select the music for the alarm?</h4>
            </div>
            <div className="main_musicalarm">
                <select 
                    value={namemusic} 
                    onChange={(e) => setNamemusic(e.target.value)}
                >
                    <option value="/WindyHill_VA.mp3">WindyHill</option>
                    <option value="/Phone_anime.mp3">Phone anime</option>
                    <option value="/Jingle_bells.mp3">Jingle bell</option>
                </select>
            </div>
            <div className="footer_musicalarm">
                <button onClick={() => update_status("")}>Prev step</button>
                <button onClick={() => update_status("TimerAlarm")}>Next step</button>
            </div>
        </div>
    );
}