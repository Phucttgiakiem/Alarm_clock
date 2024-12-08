import { useDispatch } from "react-redux";
import { TurnOff_dialog } from "../../../redux/actions/TurnOff_Dialog";
import { Type_dialog } from "../../../redux/actions/Dialog_Alarm";
import "./DetailInform.css";
import Cookies from "js-cookie";
export default function DetaitInform () {
    const dispatch = useDispatch()
    const inform = Cookies.get("detail_item");
    const TurnOff_Inform = () => {
        Cookies.set("detail_item","",{expires:1});
        dispatch(TurnOff_dialog());
        dispatch(Type_dialog(""));
    }
    return (
        <div className="wrapper_DetailInform">
            <div className="wrapper_Detailtitle">
                <h4>
                    {
                        inform
                    }
                </h4>
            </div>
            <div className="wrapper_footerDetail">
                <button className="btn_Off_Detail" onClick={() => TurnOff_Inform()}>OK</button>
            </div>
        </div>
    );
} 