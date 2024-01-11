import { useSelector, useDispatch } from "react-redux"
import { setTextInput, setFilesInput, setCaptureInput, setOptionInput, clearFilesInput } from '../../../../store/states/messageWindowState'
import { addAlert, updateAlert, deleteAlert } from '../../../../store/states/alertsState'
import { useParams, useNavigate } from "react-router-dom";
import AppReq from "../../../../services/axios/app";

function MWHeader(props) {
    const path = useParams()
    const navigation = useNavigate()
    const disp = useDispatch()
    const captureAnswer = 714120
    const splitPath = Object.values(path)[0].split('/')
    const optionInput = useSelector(state => state.messageWindowState.optionInput)
    const threadId = useSelector(state => state.messageWindowState.threadId)
    const filesInput = useSelector(state => state.messageWindowState.filesInput)
    const textInput = useSelector(state => state.messageWindowState.textInput)
    const captureInput = useSelector(state => state.messageWindowState.captureInput)

    async function createPostOrThread(method) {
        let req = new AppReq()
        let resp = await req[method]({
            message: {
                userName: optionInput,
                ThreadId: threadId,
                text: textInput,
                IP: "123.321.123.321",
                boardName: splitPath[0]
            },
            mediaFiles: filesInput
        })
        return resp
    }

    async function submitHandler() {
        let alertId = "mwHeader"
        if (captureAnswer == captureInput) {
            let resp
            disp(addAlert([alertId, "Отправляю..."]))
            if (props.isMessage) {
                resp = await createPostOrThread("createPost")
            } else {
                resp = await createPostOrThread("createThread")
            }
            if (resp.status === 201) {
                disp(updateAlert([alertId, "Успешно отправлено!"]))
                sessionStorage.setItem("textInput", "")
                disp(setTextInput(""))
                disp(clearFilesInput())
                //disp(setCaptureInput(""))
                if (splitPath.length === 1) {
                    props.isMessage ? navigation("/board/" + splitPath[0] + "/" + threadId) : navigation("/board/" + splitPath[0] + "/" + resp.data.ThreadId)
                }
            } else {
                disp(updateAlert([alertId, "Что-то пошло не так!"]))
            }
            setTimeout(() => disp(deleteAlert(alertId)), 2000)
        } else {
            addAlert([alertId, "Капча введена неверно!"])
            setTimeout(() => disp(deleteAlert(alertId)), 2000)
        }
    }

    return (
        <div className="message-window__header">
            <input autoComplete="off" type="text" className="message-window__header-input input" size="10" name="0" placeholder="опции" value={optionInput} onChange={
                (e) => disp(setOptionInput(e.target.value))} />
            <button className="message-window__header-submit button" onClick={() => submitHandler()} >Отправить</button>
        </div>
    )
}

export default MWHeader