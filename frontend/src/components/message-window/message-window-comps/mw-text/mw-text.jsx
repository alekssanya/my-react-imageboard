import { useSelector, useDispatch } from "react-redux"
import { setTextInput } from '../../../../store/states/messageWindowState'

function MWText(props) {
    const disp = useDispatch()
    const textSymbolCounter = 15000
    const textInput = useSelector(state => state.messageWindowState.textInput)

    function doAddTags(tag1, tag2) {
        let ToolbarTextarea = document.getElementById(props.mwId + "-ta")
        if (document.selection) {
            let sel = document.selection.createRange()
            sel.text = tag1 + sel.text + tag2
        }
        else {
            let len = ToolbarTextarea.value.length
            let start = ToolbarTextarea.selectionStart
            let end = ToolbarTextarea.selectionEnd
            let scrollTop = ToolbarTextarea.scrollTop
            let scrollLeft = ToolbarTextarea.scrollLeft
            let sel = ToolbarTextarea.value.substring(start, end)
            let rep = tag1 + sel + tag2

            ToolbarTextarea.value = ToolbarTextarea.value.substring(0, start) + rep + ToolbarTextarea.value.substring(end, len)
            ToolbarTextarea.scrollTop = scrollTop
            ToolbarTextarea.scrollLeft = scrollLeft
            ToolbarTextarea.focus()
            ToolbarTextarea.setSelectionRange(start + tag1.length, end + tag1.length)
        }
        disp(setTextInput(ToolbarTextarea.value))
        ToolbarTextarea.dispatchEvent(new Event("keyup"))
    }

    return (
        <>
            <div className="message-window__text-form">
                <textarea id={props.mwId + "-ta"} name="1" className="message-window__text-form-input input" tabIndex="3" rows="10" placeholder="Комментарий. Макс. длина 15000" value={textInput} onChange={
                    (e) => disp(setTextInput(e.target.value))} />
                <span className="message-window__text-form-len">{textSymbolCounter - textInput.length}</span>
            </div>
            <div className="message-window__text-btns">
                <button className="message-window__text-btn message-window__text-btn-type-b" type="button" onClick={() => doAddTags('[b]', '[/b]')}><strong>B</strong></button>
                <button className="message-window__text-btn message-window__text-btn-type-i" type="button" onClick={() => doAddTags('[i]', '[/i]')}><em>I</em></button>
                <button className="message-window__text-btn message-window__text-btn-type-q" type="button" onClick={() => doAddTags('>', '')}>&gt;</button>
                <button className="message-window__text-btn message-window__text-btn-type-u" type="button" onClick={() => doAddTags('[u]', '[/u]')}><span className="u">U</span></button>
                <button className="message-window__text-btn message-window__text-btn-type-o" type="button" onClick={() => doAddTags('[o]', '[/o]')}><span className="o">O</span></button>
                <button className="message-window__text-btn message-window__text-btn-type-sp" type="button" onClick={() => doAddTags('[spoiler]', '[/spoiler]')}><span className="spoiler">??</span></button>
                <button className="message-window__text-btn message-window__text-btn-type-s" type="button" onClick={() => doAddTags('[s]', '[/s]')}><span className="s">S</span></button>
                <button className="message-window__text-btn" type="button" onClick={() => doAddTags('[sup]', '[/sup]')}>A<sup>a</sup></button>
                <button className="message-window__text-btn" type="button" onClick={() => doAddTags('[sub]', '[/sub]')}>A<sub>a</sub></button>
            </div>
        </>
    )
}

export default MWText