import { useEffect } from 'react'
import './spb.scss'

function ScrollPageBtns() {
    let scrollBtns = document.getElementsByClassName("scroll-page-btn")

    function showHideBtns(e) {
        if (window.pageYOffset === 0) {
            scrollBtns[0].style.display = "none"
        } else {
            scrollBtns[0].style.display = "block"
        }

        let limit = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)

        if (window.pageYOffset + window.screen.height > limit) {
            scrollBtns[1].style.display = "none"
        } else {
            scrollBtns[1].style.display = "block"
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showHideBtns)

        return () => {
            window.removeEventListener("scroll", showHideBtns)
        }
    }, [])

    function scrollTo(params) {
        if (params === 0) {
            window.scroll(0, 0)
        } else {
            window.scroll(0, document.body.scrollHeight)
        }
    }

    return (
        <>
            <button className="scroll-page-btn first" onClick={() => scrollTo(0)}>
                <svg className='spb-svg' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="16px" height="16px" version="1.0" viewBox="0 0 16 16">
                    <g id="Слой_x0020_1">
                        <g id="_1945697039936">
                            <g>
                                <path className="path" d="M0.154 2.587c-0.306,-0.46 -0.182,-1.081 0.277,-1.387 0.46,-0.307 1.081,-0.183 1.387,0.277l-1.664 1.11zm7.333 10.999l-7.333 -10.999 1.664 -1.11 7.333 10.999 -1.664 1.11zm1.664 -1.11c0.306,0.46 0.182,1.081 -0.277,1.387 -0.46,0.306 -1.081,0.182 -1.387,-0.277l1.664 -1.11z" />
                            </g>
                        </g>
                        <g id="_1945697039072">
                            <g>
                                <path className="path" d="M14.123 1.455c0.284,-0.473 0.899,-0.625 1.372,-0.341 0.474,0.285 0.626,0.9 0.341,1.373l-1.713 -1.032zm-6.661 11.06l6.661 -11.06 1.713 1.032 -6.66 11.06 -1.714 -1.032zm1.714 1.032c-0.285,0.473 -0.9,0.625 -1.373,0.341 -0.473,-0.285 -0.625,-0.9 -0.341,-1.373l1.714 1.032z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
            <button className="scroll-page-btn second" onClick={() => scrollTo(1)}>
                <svg className='spb-svg' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="16px" height="16px" version="1.0" viewBox="0 0 16 16">
                    <g id="Слой_x0020_1">
                        <g id="_1945697039936">
                            <g>
                                <path className="path" d="M0.154 2.587c-0.306,-0.46 -0.182,-1.081 0.277,-1.387 0.46,-0.307 1.081,-0.183 1.387,0.277l-1.664 1.11zm7.333 10.999l-7.333 -10.999 1.664 -1.11 7.333 10.999 -1.664 1.11zm1.664 -1.11c0.306,0.46 0.182,1.081 -0.277,1.387 -0.46,0.306 -1.081,0.182 -1.387,-0.277l1.664 -1.11z" />
                            </g>
                        </g>
                        <g id="_1945697039072">
                            <g>
                                <path className="path" d="M14.123 1.455c0.284,-0.473 0.899,-0.625 1.372,-0.341 0.474,0.285 0.626,0.9 0.341,1.373l-1.713 -1.032zm-6.661 11.06l6.661 -11.06 1.713 1.032 -6.66 11.06 -1.714 -1.032zm1.714 1.032c-0.285,0.473 -0.9,0.625 -1.373,0.341 -0.473,-0.285 -0.625,-0.9 -0.341,-1.373l1.714 1.032z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </>
    )
}

export default ScrollPageBtns