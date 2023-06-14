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
    const [userSurname, setUserSurname] = useState("")
    const [othername, setOthername] = useState("")
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
            setUserSurname(local.surname)
            setOthername(local.othername)
            setProfileUrl(local.imgUrl)
            setRole(local.user)
        } else {
            navigate('/')
        }
    }, [0])
    return ( 
        <div className="settingsPage">
            <SideNav
                  userSurname={userSurname}
                  othername={othername}
                  email={email}
                  profileUrl={profileUrl}
                  role={role} 
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