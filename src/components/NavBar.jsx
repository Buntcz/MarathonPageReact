import { Link } from "react-router-dom"

function NavBar() {
   return (
    <div className="navBar">
        <div className="header">
            <h2>Mega Marathon</h2>
            <p>the right path for you.</p>
        </div>
        <div className="paths">
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/join'>Join now!</Link>
            <Link className="link" to='/about'>About us</Link>
        </div>
    </div>
   )
}

export {NavBar}