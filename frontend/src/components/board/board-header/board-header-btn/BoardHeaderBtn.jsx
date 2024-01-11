import './bhb.scss'
import { useSelector, useDispatch } from 'react-redux'
import { asideSwitcher } from '../../../../store/states/appState'

function BoardHeaderBtn() {
    const asideIsOpen = useSelector(state => state.appState.asideIsOpen)
    const dispatch = useDispatch()
    
    return (
        <button className='board-header__close-btn link-color' onClick={() => dispatch(asideSwitcher())} >
            {asideIsOpen ? "<<" : ">>"}
        </button>
    );
}

export default BoardHeaderBtn