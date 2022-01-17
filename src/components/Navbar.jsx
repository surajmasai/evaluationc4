import { Link } from 'react-router-dom'


export const Navbar = () => {
    return <div className="navbardiv">
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login' style={{ margin: "10px" }}>Login</Link>
            <Link to='/registration' style={{ margin: "10px" }}>Registration</Link>
            <Link to='/Admin' style={{ margin: "10px" }}>Admin</Link>
            <Link to='/dashboard' style={{ margin: "10px" }}>Dashboard</Link>
        </div>
    </div>
}