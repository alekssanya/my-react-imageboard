import "./message.scss"
import MWHeader from "./message-window-comps/mw-header/mw-header"
import MWText from "./message-window-comps/mw-text/mw-text"
import MWFiler from "./message-window-comps/mw-filer/mw-filer"
import MWCapture from "./message-window-comps/mw-capture/mw-capture"

function MessageWindow(props) {
  return (
    <div id={props.id} className="message-window-wr">
      <div className="message-window">
        <MWHeader isMessage={props.isMessage} />
        <MWText mwId={props.id}/>
        <MWFiler isMovMesWindow={props.isMovMesWindow} />
        <MWCapture />
      </div>
    </div>
  )
}

export default MessageWindow