import "./mwf.scss"
import { useSelector, useDispatch } from "react-redux"
import { setFilesInput, setIsFilesLoaded, deleteFile } from '../../../../store/states/messageWindowState'
import { addAlert, updateAlert, deleteAlert } from '../../../../store/states/alertsState'

function MWFiler(props) {
  const disp = useDispatch()
  const filesInput = useSelector(state => state.messageWindowState.filesInput)
  const filesIsLoaded = useSelector(state => state.messageWindowState.isFilesLoaded)

  const filesTypes = {
    // PNG
    "89504e47": "image/png",
    // GIF
    "474946383961": "image/gif", // GIF89a
    "474946383761": "image/gif", // GIF87a
    // JPEG
    "ffd8ffdb": "image/jpeg",
    "ffd8ffe0": "image/jpeg",
    "ffd8ffe1": "image/jpeg",
    "ffd8ffe2": "image/jpeg",
    "ffd8ffe3": "image/jpeg",
    "ffd8ffe8": "image/jpeg",
    // WEBM
    "1a45dfa3": "video/webm",
    // MP4 (варианты ftyp)
    "000000186674797069736f6d": "video/mp4", // ftypisom
    "00000018667479706d703432": "video/mp4", // ftypmp42
    "00000020667479706d703432": "video/mp4",
    "00000018667479706d703431": "video/mp4",
    "00000020667479706d703431": "video/mp4",
    "000000186674797061766331": "video/mp4", // ftypavc1
    "000000206674797061766331": "video/mp4",
    "00000018667479706d703430": "video/mp4", // ftypmp40
    "00000020667479706d703430": "video/mp4"
  }

  async function addFiles(e) {
    const alertId = "mbFiler"
    if (!filesIsLoaded || filesInput.length > 4) {
      disp(addAlert([alertId, !filesIsLoaded ? "Другой файл грузится" : "Лимит файлов"]))
      setTimeout(() => disp(deleteAlert(alertId)), 2000)
      return
    }
  
    disp(setIsFilesLoaded())
    disp(addAlert([alertId, "Загружаю файл..."]))
  
    const loadedFile = e.target.files[e.target.files.length - 1]
    const reader = new FileReader()
  
    reader.onloadend = function (e) {
      const uint8Arr = new Uint8Array(e.target.result)
      const hex = [...uint8Arr]
        .map(b => b.toString(16).padStart(2, "0"))
        .join("")
        .toLowerCase()
  
      // JPEG, PNG, GIF, WEBM — обычная проверка
      const knownImageVideoSig = {
        "89504e47": "image/png",
        "474946383961": "image/gif",
        "474946383761": "image/gif",
        "ffd8ffdb": "image/jpeg",
        "ffd8ffe0": "image/jpeg",
        "ffd8ffe1": "image/jpeg",
        "ffd8ffe2": "image/jpeg",
        "ffd8ffe3": "image/jpeg",
        "ffd8ffe8": "image/jpeg",
        "1a45dfa3": "video/webm"
      }
  
      const matchKnown = Object.keys(knownImageVideoSig).some(sig => hex.startsWith(sig))
  
      // MP4 — ищем "66747970" (ftyp) где-нибудь в первых 24 байтах
      const mp4Match = hex.includes("66747970")
  
      if (matchKnown || mp4Match) {
        disp(setFilesInput(loadedFile))
        disp(updateAlert([alertId, "Загружено"]))
      } else {
        disp(updateAlert([alertId, "Недопустимый файл"]))
      }
  
      disp(setIsFilesLoaded())
      setTimeout(() => disp(deleteAlert(alertId)), 2000)
    }
  
    reader.readAsArrayBuffer(loadedFile.slice(0, 24)) // первые 24 байта
  }
  

  return (
    <div className="message-window__filer">
      <input
        id={props.isMovMesWindow ? "mmw-input" : "header-input"}
        type="file"
        name="file"
        className="message-window__filer-input"
        multiple=""
        onChange={(e) => addFiles(e)}
      />
      <div className="message-window__filer-limits">
        Макс объем: 20Mб, макс кол-во файлов: 4
      </div>
      <div
        className="message-window__filer-drag-area"
        onClick={() => document.getElementById(props.isMovMesWindow ? "mmw-input" : "header-input").click()}
      >
        Кликни/Брось файл/ctrl-v
      </div>
      {filesInput.length > 0 &&
        <div className="message-window__filer-thumbnails">
          {filesInput.map((elem, index) => (
            <div key={index} className="filer__thumb filer__thumb_c_0">
              <span className="filer__img">{elem.name}</span>
              <button className="filer__delete" onClick={() => disp(deleteFile(index))}>X</button>
            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default MWFiler