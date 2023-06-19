import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";


const ProfileSetting = () => {
    const [fullname, setFullname] = useState("")
    const [address, setAddress] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [ isLoading, setIsLoading ] = useState(false)
    const { user } = UserAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            const local = JSON.parse(localStorage.getItem('RavsAuthUser'));
            setFullname(local.fullname)
            setAddress(local.address)
            setPhonenumber(local.phonenumber)
        } else {
            navigate('/')
        }
    }, [0])

    const handelSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if (fullname === "" ||  address === "" || phonenumber === "") {
            setIsLoading(false)
        } else {
            const washingtonRef = doc(db, "UsersRavs", `${user.uid}`);
            await updateDoc(washingtonRef, {
              fullname : fullname,
              address : address,
              phonenumber: phonenumber
            });
            localStorage.removeItem('RavsAuthUser');
            const docRef = doc(db, "UsersRavs", `${user.uid}`);
            const docSnap = await getDoc(docRef);
            localStorage.setItem('RavsAuthUser', JSON.stringify(docSnap.data()));
            window.location.reload()
        }
        setIsLoading(false)
    }


    return ( 
        <div className="profileSettings settingsMain">
            <form action="" onSubmit={handelSubmit}>
                <div className="form-2">
                    <p>Profile settings</p>
                    <div className="settingsInformation">
                        <div className="inputGroup">
                            <input 
                                type="text" 
                                disabled
                                name="text" 
                                placeholder="Full name"
                                value={fullname} 
                                onChange={(e) => setFullname(e.target.value)}
                            />
                        </div>
                        
                        <div className="inputGroup">
                            <input 
                                type="number" 
                                name="text" 
                                placeholder="Phone number" 
                                value={phonenumber} 
                                onChange={(e) => setPhonenumber(e.target.value)}
                            />
                        </div>
                
                        <div className="inputGroup">
                            <input 
                                type="text"
                                name="text" 
                                placeholder="Address"
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className="actionBtn">
                        { isLoading 
                            ? 
                            <button className="saveBtn" type="button" disabled>
                                <span className="loader"></span>
                            </button>
                            : 
                            <button className="nextBtn" type="submit">
                                <p>Save</p>
                                <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        }
                    </div> 
                </div> 
           </form>
        </div>
     );
}
 
export default ProfileSetting;