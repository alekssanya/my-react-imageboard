import "./mwf.scss"
import { useSelector, useDispatch } from "react-redux"
import { setFilesInput, setIsFilesLoaded, deleteFile } from '../../../../store/states/messageWindowState'
import { addAlert, updateAlert, deleteAlert } from '../../../../store/states/alertsState'

function MWFiler(props) {
  const disp = useDispatch()
  const filesInput = useSelector(state => state.messageWindowState.filesInput)
  const filesIsLoaded = useSelector(state => state.messageWindowState.isFilesLoaded)

  const filesTypes = {
    "89504e47": "image/png",
    "47494638": "image/gif",
    "ffd8ffe0": "image/jpeg",
    "ffd8ffe1": "image/jpeg",
    "ffd8ffe2": "image/jpeg",
    "ffd8ffe3": "image/jpeg",
    "ffd8ffe8": "image/jpeg",
    "1a45dfa3": "video/webm",
    "0001c": "video/mp4",
    "00020": "video/mp4",
    "00018": "video/mp4",
  }

  async function addFiles(e) {
    let alertId = "mbFiler"
    if (!filesIsLoaded || filesInput.length > 4) {
      disp(addAlert([alertId, !filesIsLoaded ? "Другой файл грузится" : "Лимит файлов"]))
      setTimeout(() => disp(deleteAlert(alertId)), 2000)
      return
    }
    disp(setIsFilesLoaded())
    disp(addAlert([alertId, "Загружаю файл..."]))
    let loadedFile = e.target.files[e.target.files.length - 1]
    let reader = new FileReader()
    reader.onloadend = function (e) {
      let fileUint8Arr = new Uint8Array(e.target.result)
      let header = ""
      let arr = fileUint8Arr.subarray(0, 4)
      for (let i = 0; i < arr.length; i++) {
        header += arr[i].toString(16)
      }
      if (filesTypes[header] !== undefined) {
        disp(setFilesInput(loadedFile))
      }
      disp(setIsFilesLoaded())
      disp(updateAlert([alertId, "Загружено"]))
      setTimeout(() => disp(deleteAlert(alertId)), 2000)
    }
    reader.readAsArrayBuffer(loadedFile)
  }

  return (
    <div className="message-window__filer">
      <input id={props.isMovMesWindow ? "mmw-input" : "header-input"} type="file" name="file" className="message-window__filer-input" multiple="" onChange={(e) => addFiles(e)} />
      <div className="message-window__filer-limits">Макс объем: 20Mб, макс кол-во файлов: 4</div>
      <div className="message-window__filer-drag-area" onClick={() => document.getElementById(props.isMovMesWindow ? "mmw-input" : "header-input").click()}>Кликни/Брось файл/ctrl-v</div>
      {filesInput.length > 0 &&
        <div className="message-window__filer-thumbnails">
          {filesInput.map((elem, index) => (
            <div key={index} className="filer__thumb filer__thumb_c_0">
              <span className="filer__img">
                {elem.name}
              </span>
              <button className="filer__delete" onClick={() => disp(deleteFile(index))}>X</button>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default MWFiler