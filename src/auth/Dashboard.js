import { Outlet, Link } from "react-router-dom";

export default function Dashboard() {
// outlet traba la composición
    return (
        <div>
            <ul>
            <Link to={`/datalovers`}><li>DataLovers</li> </Link>
            <Link to={`/trivia`}><li>Trivia</li></Link>
            </ul>
            
            <Outlet />
        </div>
    )
}
