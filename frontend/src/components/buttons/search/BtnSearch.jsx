import './bs.scss'
import ModalSearch from "./modal-search/ModalSearch"
import { useState } from 'react'

function BtnSearch(props) {
    const [searchIsOpen, setSearchIsOpen] = useState(false)

    function leaveHandler() {
        setSearchIsOpen(false)
    }

    return (
        <div className="btn-search-wr btn" onClick={() => setSearchIsOpen(!searchIsOpen)}>
            <button className="btn-search">
                <svg className="search svg-btn" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.1" viewBox="0 0 14 14">
                    <rect className="fil0" width="14" height="14" />
                    <ellipse className="fil1 str0" cx="6" cy="6.5" rx="3.5" ry="4" />
                    <line className="fil1 str1" x1="8.5" y1="9.5" x2="11.5" y2="12.5" />
                </svg>
            </button>
            {searchIsOpen && <ModalSearch url={props.url} ML={leaveHandler} />}
        </div>
    )
}

export default BtnSearch