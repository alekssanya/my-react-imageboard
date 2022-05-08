import captureImg from "../../assets/img/show.png"
import "./message.scss"
import AppReq from "../../services/axios/app";
import { useSelector, useDispatch } from "react-redux"
import { setTextInput, setOptionInput, setCaptureInput, setFilesInput, setIsFilesLoaded } from '../../store/messageBoardState'
import { addAlert, updateAlert, deleteAlert } from '../../store/alertsState'
import { useParams, useNavigate } from "react-router-dom";

function MessageBoard(props) {
  const path = useParams()
  const navigation = useNavigate()
  const disp = useDispatch()
  const captureAnswer = 714120
  const textSymbolCounter = 15000
  const splitPath = Object.values(path)[0].split('/')
  const textInput = useSelector(state => state.messageBoardState.messageBoardText)
  const optionInput = useSelector(state => state.messageBoardState.optionInput)
  const captureInput = useSelector(state => state.messageBoardState.captureInput)
  const threadId = useSelector(state => state.messageBoardState.threadId)
  const filesInput = useSelector(state => state.messageBoardState.filesInput)
  const filesIsLoaded = useSelector(state => state.messageBoardState.filesIsLoaded)

  function doAddTags(firstTag, secondTag) {
    if (textInput.slice(0, 10) === window.getSelection().toString().slice(0, 10)) {
      disp(setTextInput(firstTag + textInput + secondTag))
    } else {
      disp(setTextInput(textInput + firstTag + secondTag))
    }
  }

  async function sendPost() {
    if (captureAnswer == captureInput) {
      disp(addAlert("Отправляю..."))
      let req = new AppReq()
      if (props.isThread) {
        if (splitPath.length > 1) {
          let resp = await req.createPost({ userName: optionInput, ThreadId: splitPath[1], text: textInput, IP: "123.321.123.321", boardName: splitPath[0], mediaFiles: filesInput })
          if (resp.status === 200) {
            disp(updateAlert("Успешно отправлено!"))
          } else {
            disp(updateAlert("Что-то пошло не так!"))
          }
          setTimeout(disp(deleteAlert()), 2000)
        } else {
          let resp = await req.createPost({
            message: {
              userName: optionInput,
              ThreadId: threadId,
              text: textInput,
              IP: "123.321.123.321",
              boardName: splitPath[0]
            },
            mediaFiles: filesInput
          })
          if (resp.status === 200) {
            disp(updateAlert("Успешно отправлено!"))
            navigation("/board/" + splitPath[0] + "/" + threadId)
          } else {
            disp(updateAlert("Что-то пошло не так!"))
          }
          setTimeout(() => disp(deleteAlert()), 2000)
        }
      } else {
        req.createThread({ boardName: splitPath[0], userName: optionInput, text: textInput, IP: "123.321.123.321", mediaFiles: filesInput })
      }
      disp(setTextInput(""))
      sessionStorage.setItem("mesBoardText", "")
      //     window.location.reload()
    } else {
      addAlert("Капча введена неверно!")
      setTimeout(() => disp(deleteAlert()), 2000)
    }
  }

  async function addFiles(e) {
    if (filesIsLoaded) {
      console.log("другой файл грузится")
      return
    }
    disp(setIsFilesLoaded())
    disp(addAlert("Загружаю файл..."))
    let loadedFile = e.target.files[e.target.files.length - 1]
    let reader = new FileReader();
    reader.onloadend = function (e) {
      let fileUint8Arr = new Uint8Array(e.target.result)
      console.log(e.target.result)
      let header = ""
      let type = ""
      let arr = fileUint8Arr.subarray(0, 4);
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16);
      }
      console.log(fileUint8Arr);

      switch (header) {
        case "89504e47":
          type = "image/png";
          break;
        case "47494638":
          type = "image/gif";
          break;
        case "ffd8ffe0":
        case "ffd8ffe1":
        case "ffd8ffe2":
        case "ffd8ffe3":
        case "ffd8ffe8":
          type = "image/jpeg";
          break;
        case "1a45dfa3":
          type = "video/webm";
          break;
        case "0001c":
        case "00020":
        case "00018":
          type = "video/mp4";
          break;
        default:
          type = "unknown"
          break;
      }
      console.log(type)
      if (type !== "unknown") {
        disp(setFilesInput(loadedFile))
        console.log(filesInput)
      }
      disp(setIsFilesLoaded())
      disp(updateAlert("Загружено"))
      setTimeout(() => disp(deleteAlert()), 2000)
    };
    console.log(loadedFile)
    reader.readAsArrayBuffer(loadedFile);
  }

  return (
    <div id={props.id} className="message-board-wr">
      <div className="message-board">
        <div className="message-board__header">
          <input autoComplete="off" type="text" className="message-board__header-input input" size="10" name="0" placeholder="опции" value={optionInput} onChange={
            (e) => disp(setOptionInput(e.target.value))} />
          <button className="message-board__header-submit button" onClick={(e) => sendPost(e)} >Отправить</button>
        </div>
        <div className="message-board__text-form">
          <textarea name="1" className="message-board__text-form-input input" tabIndex="3" rows="10" placeholder="Комментарий. Макс. длина 15000" value={textInput} onChange={
            (e) => disp(setTextInput(e.target.value))} />
          <span className="message-board__text-form-len">{textSymbolCounter - textInput.length}</span>
        </div>
        <div className="message-board__text-btns">
          <button className="message-board__text-btn message-board__text-btn-type-b" type="button" onClick={() => doAddTags('[b]', '[/b]')}><strong>B</strong></button>
          <button className="message-board__text-btn message-board__text-btn-type-i" type="button" onClick={() => doAddTags('[i]', '[/i]')}><em>I</em></button>
          <button className="message-board__text-btn message-board__text-btn-type-q" type="button" onClick={() => doAddTags('>', '')}>&gt;</button>
          <button className="message-board__text-btn message-board__text-btn-type-u" type="button" onClick={() => doAddTags('[u]', '[/u]')}><span className="u">U</span></button>
          <button className="message-board__text-btn message-board__text-btn-type-o" type="button" onClick={() => doAddTags('[o]', '[/o]')}><span className="o">O</span></button>
          <button className="message-board__text-btn message-board__text-btn-type-sp" type="button" onClick={() => doAddTags('[spoiler]', '[/spoiler]')}><span className="spoiler">??</span></button>
          <button className="message-board__text-btn message-board__text-btn-type-s" type="button" onClick={() => doAddTags('[s]', '[/s]')}><span className="s">S</span></button>
          <button className="message-board__text-btn" type="button" onClick={() => doAddTags('[sup]', '[/sup]')}>A<sup>a</sup></button>
          <button className="message-board__text-btn" type="button" onClick={() => doAddTags('[sub]', '[/sub]')}>A<sub>a</sub></button>
        </div>
        <div className="message-board__filer">
          <input id={props.isMovMesBoard ? "mmb-input" : "header-input"} type="file" name="file" className="message-board__filer-input" multiple="" onChange={(e) => addFiles(e)} />
          <div className="message-board__filer-limits">Макс объем: 20Mб, макс кол-во файлов: 4</div>
          <div className="message-board__filer-drag-area" onClick={() => document.getElementById(props.isMovMesBoard ? "mmb-input" : "header-input").click()}>Кликни/Брось файл/ctrl-v</div>
          {filesInput.length > 0 &&
            <div className="message-board__filer-thumbnails">
              {filesInput.map((elem, index) => (
                <div key={index} className="filer__thumb filer__thumb_c_0">
                  <span className="filer__img">
                    {elem.name}
                  </span>
                </div>
              ))}
            </div>
          }
        </div>
        <div className="message-board__capture">
          <img src={captureImg} alt="" />
          <input autoComplete="off" tabIndex="4" type="text" className="message-board__capture-input input" size="10" name="2" placeholder="капча" value={captureInput} onChange={
            (e) => disp(setCaptureInput(e.target.value))} />
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;