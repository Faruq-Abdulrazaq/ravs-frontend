import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageSupervisor = () => {
    const navigate = useNavigate()
    const { user } = UserAuth()
    const [userFullname, setUserFullname] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [role, setRole] = useState("")

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
        <div className="ManageSupervisor">
            <SideNav 
                userSurname={userFullname}
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
                <div className="main-status-bar">
                
                </div>
            </section>
        </div>
     );
}
 
export default ManageSupervisor;