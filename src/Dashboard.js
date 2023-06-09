import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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
        <div className="dashboardPage">
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
                    
                    <div className="total-reg stb-c">
                        <s className="stb-c-icon">
                            <img src={process.env.PUBLIC_URL + '/icons/address-location-map-svgrepo-com.png'} alt="" />
                        </s>
                        <div className="stb-c-digits">
                            <h1>87678982</h1>
                            <p>Total Registered Addresses</p>
                        </div>
                    </div>

                    <div className="total-reg stb-c">
                        <s className="stb-c-icon">
                            <img src={process.env.PUBLIC_URL + '/icons/align-from-right-svgrepo-com.png'} alt="" />
                        </s>
                        <div className="stb-c-digits">
                            <h1>87</h1>
                            <p>Not verified</p>
                        </div>
                    </div>
                    <div className="total-reg stb-c">
                        <s className="stb-c-icon">
                            <img src={process.env.PUBLIC_URL + '/icons/align-horizontal-right-svgrepo-com.png'} alt="" />
                        </s>
                        <div className="stb-c-digits">
                            <h1>59</h1>
                            <p>Verified</p>
                        </div>
                    </div>
                    <div className="total-reg stb-c">
                        <s className="stb-c-icon">
                            <img src={process.env.PUBLIC_URL + '/icons/map-round-667-svgrepo-com.png'} alt="" />
                        </s>
                        <div className="stb-c-digits">
                            <h1>68</h1>
                            <p>Map approved</p>
                        </div>
                    </div>
                </div>
                <div className="main-nav-area">
                    <span><img src={process.env.PUBLIC_URL + '/icons/map-round-667-svgrepo-com.png'} alt="" />Map</span>
                    <map name="">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84170368382!2d7.367465777397207!3d9.024246820730172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1685999535167!5m2!1sen!2sng" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </map>
                </div>
            </section>
        </div>
     );
}
 
export default Dashboard;