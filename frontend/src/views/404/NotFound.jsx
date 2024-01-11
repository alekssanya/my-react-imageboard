import { Link } from "react-router-dom"
import './notfound.scss'
function NotFound() {
    return (
        <Link to="/">
            <div className="NotFound">
                Not Found Click Me!
            </div>
        </Link>
    )
}

export default NotFound