import { useEffect, useState } from "react";
import ChangePassword from "./Components/ChangePassword";
import ProfileSetting from "./Components/ProfileSettings";
import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";


const Settings = () => {
    const [newView, setNewView] = useState(<ProfileSetting />)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const navigate = useNavigate()
    const { user } = UserAuth()
    const [userFullname, setUserFullname] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [role, setRole] = useState("")
    
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();

    useEffect(() => {
        if (user) {
            const local = JSON.parse(localStorage.getItem('RavsAuthUser'));
            setEmail(local.email)
            setUserFullname(local.fullname)
            setProfileUrl(local.imgUrl)
            setRole(local.user)
        } else {
            navigate('/')
        }
    }, [0])
    return ( 
        <div className="settingsPage">
            <SideNav
                userSurname={userFullname}
                email={email}
                profileUrl={profileUrl}
                role={role} 
                activeDashboard={"active-sidenav"}
                activeAll={"active-sidenav"}
                activeStates={"active-sidenav"}
                activeManage={"active-sidenav"}
                activeAdd={"active-sidenav"}
                activeSupervisor={"active-sidenav"}
                activeSettings={"active"}
                activeHelp={"active-sidenav"}
            />
            <section className="mainnav">
                <header>
                    <GetDate
                        role={role}   
                    />
                </header>
                <div className="nav-settings">
                    <ul> 
                        <li onClick={() => setNewView(<ProfileSetting />)}>Profile Settings</li>
                        <li onClick={() => setNewView(<ChangePassword />)}>Password Reset</li>
                    </ul>
                </div>
                { newView }
            </section>
        </div>
     );
}
 
export default Settings;