import { useState } from "react";
import ChangePassword from "./Components/ChangePassword";
import ProfileSetting from "./Components/ProfileSettings";
import Security from "./Components/Security";
import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";

const Settings = () => {
    const [newView, setNewView] = useState(<ProfileSetting />)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();
    return ( 
        <div className="settingsPage">
            <SideNav />
            <section className="mainnav">
                <header>
                    <GetDate />
                </header>
                <div className="nav-settings">
                    <ul> 
                        <li onClick={() => setNewView(<ProfileSetting />)}>Profile Settings</li>
                        <li onClick={() => setNewView(<ChangePassword />)}>Password Reset</li>
                        <li onClick={() => setNewView(<Security />)}>Security & Authenication</li>
                    </ul>
                </div>
                { newView }
            </section>
        </div>
     );
}
 
export default Settings;