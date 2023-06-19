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
            <img src="https://firebasestorage.googleapis.com/v0/b/ravs-53992.appspot.com/o/Meta%20Image%2Fkyct-removebg-preview.png?alt=media&token=b086e233-6f01-4a5a-bafb-c1c1c0ba0796" alt="" />
        </div>
        <div className="sidenav-main">
            <ul>
                <Link to="/Dashboard" className="link-bk"><li className={props.activeDashboard}><img src={process.env.PUBLIC_URL + '/icons/dashboard-alt-svgrepo-com.png'} alt="" /> Dashboard</li></Link>
                <Link to="/All" className="link-bk"><li className={props.activeAll}><img src={process.env.PUBLIC_URL + '/icons/address-location-map-svgrepo-com.png'} alt="" />All Address</li></Link>
                <Link to="/States" className="link-bk"><li className={props.activeStates}><img src={process.env.PUBLIC_URL + '/icons/exchange-svgrepo-com.png'} alt="" /> Active states</li></Link>
                { props.role === "Admin" 
                    ?
                    <Link to="/Manage" className="link-bk"><li className={props.activeManage}><img src={process.env.PUBLIC_URL + '/icons/manage-files-svgrepo-com.png'} alt="" /> Manage supervisors</li></Link>
                    :
                    <Link to="/Add" className="link-bk"><li className={props.activeAdd}><img src={process.env.PUBLIC_URL + '/icons/plus-svgrepo-com.png'} alt="" /> New Address</li></Link>
                 }    
                 { props.role === "Admin" 
                 ?
                 <Link to="/Supervisor" className="link-bk"><li className={props.activeSupervisor}><img src={process.env.PUBLIC_URL + '/icons/add-user-9-svgrepo-com.png'} alt="" /> Add Supervisor</li></Link>
                 : "" }            
                <Link to="/Settings" className="link-bk"><li className={props.activeSettings}><img src={process.env.PUBLIC_URL + '/icons/gear.png'} alt="" /> Settings</li></Link>
                <Link to="/Help" className="link-bk"><li className={props.activeHelp}><img src={process.env.PUBLIC_URL + '/icons/information.png'} alt="" /> Help</li></Link>
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