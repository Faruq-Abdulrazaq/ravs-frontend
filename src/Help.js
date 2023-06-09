import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Help = () => {
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
        <div className="helpPage">
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
                activeSettings={"active-sidenav"}
                activeHelp={"active"}  
        />
        <section className="mainnav">
            <header>
                <GetDate
                     role={role} 
                     title = "Help"   
                />
            </header>
            <div className="help">
                <h4>How to use KYTC</h4>
                    <p className="help-p">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, repellat dolores ea cupiditate, dicta quisquam nam culpa quidem tenetur aperiam cum labore blanditiis rem ducimus, debitis dignissimos delectus nisi aliquam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, repellat dolores ea cupiditate, dicta quisquam nam culpa quidem tenetur aperiam cum labore blanditiis rem ducimus, debitis dignissimos delectus nisi aliquam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, repellat dolores ea cupiditate, dicta quisquam nam culpa quidem tenetur aperiam cum labore blanditiis rem ducimus, debitis dignissimos delectus nisi aliquam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, repellat dolores ea cupiditate, dicta quisquam nam culpa quidem tenetur aperiam cum labore blanditiis rem ducimus, debitis dignissimos delectus nisi aliquam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, repellat dolores ea cupiditate, dicta quisquam nam culpa quidem tenetur aperiam cum labore blanditiis rem ducimus, debitis dignissimos delectus nisi aliquam.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, repellat dolores ea cupiditate, dicta quisquam nam culpa quidem tenetur aperiam cum labore blanditiis rem ducimus, debitis dignissimos delectus nisi aliquam.
                    </p>
            </div>
        </section>
    </div> 
    );
}
 
export default Help;