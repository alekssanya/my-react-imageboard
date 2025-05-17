import captureImg from "../../../../assets/img/show.png"
import { useSelector, useDispatch } from "react-redux"
import { setCaptureInput } from '../../../../store/states/messageWindowState'

function MWCapture() {
    const disp = useDispatch()
    const captureInput = useSelector(state => state.messageWindowState.captureInput)

    return (
        <div className="message-window__capture">
          <img src={captureImg} alt="" />
          <input autoComplete="off" tabIndex="4" type="text" className="message-window__capture-input input" size="10" name="2" placeholder="капча" value={captureInput} onChange={
            (e) => disp(setCaptureInput(e.target.value))} />
        </div>
    )
}

export default MWCapture