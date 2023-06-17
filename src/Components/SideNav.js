import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
const SideNav = (props) => {
    const { logout } = UserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logout()
            localStorage.removeItem('RavsAuthUser');
            navigate('/')
        } catch (e) {
        }
    }
    return ( 
        <section className="sidenav">
        <div className="sidenav-ravs">
            <img src="https://firebasestorage.googleapis.com/v0/b/ravs-53992.appspot.com/o/Meta%20Image%2FlogoB2.png?alt=media&token=becdeecc-aecc-4932-87d6-3a89acedf7a5&_gl=1*15ins5l*_ga*NjExMzY5MDM5LjE2NjkwOTY4NDY.*_ga_CW55HF8NVT*MTY4NTk3MDM5Ni4xMTEuMC4xNjg1OTcwMzk2LjAuMC4w" alt="" />
        </div>
        <div className="sidenav-main">
            <ul>
                <Link to="/Dashboard" className="link-bk"><li className="active"><img src={process.env.PUBLIC_URL + '/icons/dashboard-alt-svgrepo-com.png'} alt="" /> Dashboard</li></Link>
                <Link to="/All" className="link-bk"><li className="active-sidenav"><img src={process.env.PUBLIC_URL + '/icons/address-location-map-svgrepo-com.png'} alt="" />All Address</li></Link>
                <Link to="/States" className="link-bk"><li className="active-sidenav"><img src={process.env.PUBLIC_URL + '/icons/exchange-svgrepo-com.png'} alt="" /> Active states</li></Link>
                { props.role === "Admin" 
                    ?
                    <Link to="/Manage" className="link-bk"><li className="active-sidenav"><img src={process.env.PUBLIC_URL + '/icons/manage-files-svgrepo-com.png'} alt="" /> Manage supervisors</li></Link>
                    :
                    <Link to="/Add" className="link-bk"><li className="active-sidenav"><img src={process.env.PUBLIC_URL + '/icons/plus-svgrepo-com.png'} alt="" /> Add new</li></Link>
                 }                
                <Link to="/Settings" className="link-bk"><li className="active-sidenav"><img src={process.env.PUBLIC_URL + '/icons/gear.png'} alt="" /> Settings</li></Link>
                <Link to="/Help" className="link-bk"><li className="active-sidenav"><img src={process.env.PUBLIC_URL + '/icons/information.png'} alt="" /> Help</li></Link>
            </ul>
        </div>
        <div className="sidenav-user">
            <div className="profileImg">
                <img src={props.profileUrl} alt="" />
            </div>
            <div className="username" title="Profile">
                <span className="username-span-1">{props.userSurname}</span>
                <span className="username-span-2">{props.email}</span>
            </div>
            <div className="logout" title="Logout" onClick={handleLogout}>
                <img src={process.env.PUBLIC_URL + '/icons/logout.png'} alt="" /> 
            </div>
        </div>
    </section>
     );
}
 
export default SideNav;