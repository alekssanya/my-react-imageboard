import './bhb.scss'
import { useSelector, useDispatch } from 'react-redux'
import { asideSwitcher } from '../../../store/appState'

function BoardHeaderBtn() {
    const count = useSelector(state => state.state.asideIsOpen)
    const dispatch = useDispatch()
    
    return (
        <button className='board-header__close-btn link-color' onClick={() => dispatch(asideSwitcher())} >
            {count ? "<<" : ">>"}
        </button>
    );
}

export default BoardHeaderBtn;