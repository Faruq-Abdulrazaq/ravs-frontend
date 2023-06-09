import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Help = () => {
    const navigate = useNavigate()
    const { user } = UserAuth()
    const [userSurname, setUserSurname] = useState("")
    const [othername, setOthername] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")

    useEffect(() => {
        if (user) {
            const local = JSON.parse(localStorage.getItem('RavsAuthUser'));
            setEmail(local.email)
            setUserSurname(local.surname)
            setOthername(local.othername)
            setProfileUrl(local.imgUrl)
        } else {
            navigate('/')
        }
    }, [0])
    return ( 
        <div className="helpPage">
        <SideNav 
            userSurname={userSurname}
            othername={othername}
            email={email}
            profileUrl={profileUrl}
        />
        <section className="mainnav">
            <header>
                <GetDate />
            </header>
            <div className="main-status-bar">
            
            </div>
        </section>
    </div> 
    );
}
 
export default Help;