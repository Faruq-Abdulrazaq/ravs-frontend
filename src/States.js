import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query} from "firebase/firestore";  
import { db } from "./Firebase";

const States = () => {
    const navigate = useNavigate()
    const { user } = UserAuth()
    const [userFullname, setUserFullname] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [role, setRole] = useState("")
    const [states, setStates] = useState({
        "Abia": [],
        "Adamawa": [],
        "Akwa Ibom": "",
        "Anambra": [],
        "Bauchi": [],
        "Benue": [],
        "Borno": [],
        "Bayelsa": [],
        "Cross River": [],
        "Delta": [],
        "Eboyi": [],
        "Edo": [],
        "Ekiti": [],
        "Enugu": [],
        "FCT": [],
        "Gombe": [],
        "Imo": [],
        "Jigawa": [],
        "Kebbi": [],
        "Kaduna": [],
        "Kano": [],
        "Kogi": [],
        "Katsina": [],
        "Kwara": [],
        "Lagos": [],
        "Nasarawa": [],
        "Niger": [],
        "Ogun": [],
        "Ondo": [],
        "Osun": [],
        "Oyo": [],
        "Plateau": [],
        "Rivers": [],
        "Sokoto": [],
        "Taraba": [],
        "Yobe": [],
        "Zamfara": [],
      });

      const stateNg = ["Abia","Adamawa", "Akwa Ibom", "Anambra","Bauchi","Benue","Borno","Bayelsa","Cross River","Delta","Eboyi","Edo","Ekiti","Enugu","FCT",
                        "Gombe","Imo","Jigawa","Kebbi","Kaduna","Kano","Kogi","Katsina","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau",
                        "Rivers","Sokoto","Taraba","Yobe","Zamfara",];


    useEffect(() => {
        
        if (user) {
            const local = JSON.parse(localStorage.getItem('RavsAuthUser'));
            setEmail(local.email)
            setUserFullname(local.fullname)
            setProfileUrl(local.imgUrl)
            setRole(local.user)
            getStates()
        } else {
            navigate('/')
        }
    }, [])

    const getStates = async () => {
        const QuerySnapshot = query(collection(db, "RAVS"));
        const Snapshot = await getDocs(QuerySnapshot);
        Snapshot.forEach((doc) => {     
            for (const st of stateNg) {
                if (doc.data().registeredData.state === st){
                    setStates((prevProps) => ({
                        ...prevProps,
                        [st]: [st]
                      }));
                }
            }
        });


    }

    return ( 
        <div className="statePage">
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
                <div className="allStates">
                    <div className="displayStates">
                        <div className="stateGroup">
                        <label htmlFor="">Abia</label>
                            <h4>{states["Abia"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Adamawa</label>
                            <h4>{states["Adamawa"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Akwa Ibom</label>
                            <h4>{states["Akwa Ibom"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Anambra</label>
                            <h4>{states["Anambra"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Bauchi</label>
                            <h4>{states["Bauchi"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Benue</label>
                            <h4>{states["Benue"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Borno</label>
                            <h4>{states["Borno"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Bayelsa</label>
                            <h4>{states["Bayelsa"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Cross River</label>
                            <h4>{states["Cross River"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Delta</label>
                            <h4>{states["Delta"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Eboyi</label>
                            <h4>{states["Eboyi"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Edo</label>
                            <h4>{states["Edo"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Ekiti</label>
                            <h4>{states["Ekiti"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Enugu</label>
                            <h4>{states["Enugu"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">FCT</label>
                            <h4>{states["FCT"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Gombe</label>
                            <h4>{states["Gombe"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Imo</label>
                            <h4>{states["Imo"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Jigawa</label>
                            <h4>{states["Jigawa"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Kebbi</label>
                            <h4>{states["Kebbi"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Kaduna</label>
                            <h4>{states["Kaduna"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Kano</label>
                            <h4>{states["Kano"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Kogi</label>
                            <h4>{states["Kogi"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Katsina</label>
                            <h4>{states["Katsina"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Kwara</label>
                            <h4>{states["Kwara"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Lagos</label>
                            <h4>{states["Lagos"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Nasarawa</label>
                            <h4>{states["Nasarawa"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Niger</label>
                            <h4>{states["Niger"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Ogun</label>
                            <h4>{states["Ogun"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Ondo</label>
                            <h4>{states["Ondo"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Osun</label>
                            <h4>{states["Osun"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Oyo</label>
                            <h4>{states["Oyo"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Plateau</label>
                            <h4>{states["Plateau"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Rivers</label>
                            <h4>{states["Rivers"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Sokoto</label>
                            <h4>{states["Sokoto"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Taraba</label>
                            <h4>{states["Taraba"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Yobe</label>
                            <h4>{states["Yobe"].length}</h4>
                        </div>
                        <div className="stateGroup">
                            <label htmlFor="">Zamfara</label>
                            <h4>{states["Zamfara"].length}</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div> 
    );
}
 
export default States;