import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageSupervisor = () => {
    const navigate = useNavigate()
    const { user } = UserAuth()
    const [userSurname, setUserSurname] = useState("")
    const [othername, setOthername] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [role, setRole] = useState("")

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
        <div className="ManageSupervisor">
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
                <div className="main-status-bar">
                
                </div>
            </section>
        </div>
     );
}
 
export default ManageSupervisor;