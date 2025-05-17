import { useSelector } from 'react-redux'
import Alerts from '../../alerts/Alerts'
import './acont.scss'
const AlertsCont = (() => {
    const alerts = useSelector(state => state.alertsState.alertsList)
    let arr = Object.keys(alerts)
    
    return (
        <div className='acont'>
            {arr &&
                arr.map((elem) => (
                    <Alerts key={elem} text={alerts[elem]}/>
                ))
            }
        </div>
    )
})

export default AlertsCont