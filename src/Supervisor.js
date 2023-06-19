import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, storage } from "./Firebase";
import { v4 } from "uuid";
import {
    ref,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


const Supervisor = () => {
    const navigate = useNavigate()
    const { user, createUser } = UserAuth()
    const [userFullname, setUserFullname] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [role, setRole] = useState("")
    const [supFullname, setSupFullname] = useState("")
    const [supEmail, setSupEmail] = useState("")
    const [supAddress, setSupAddress] = useState("")
    const [supPhonenumber, setSupPhonenumber] = useState("")
    const [supCenter, setSupCenter] = useState("")
    const [supImg, setSupImg] = useState("")
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const supPassword = "123456789"


    useEffect(() => {
        if (user) {
            const local = JSON.parse(localStorage.getItem('RavsAuthUser'));
            setEmail(local.email)
            setUserFullname(local.fullname)
            setProfileUrl(local.imgUrl)
            setRole(local.user)
            if (role === 'supervisor') {
                 navigate('/dashboard')
            }
        } else {
            navigate('/')
        }
    }, [0])

    const handlePhoneNumber = (e) => {
        if (supPhonenumber.length != 11) {
            setSupPhonenumber(e.target.value)
        } else {
            var str = supPhonenumber;
            str = str.substring(0, str.length - 1);
            setSupPhonenumber(str)
        }
    }

    const UploadUser = async (url) => {
        await createUser(supEmail, supPassword)
        .then( async(response) =>  {
            await setDoc(doc(db, "UsersRavs", response.user.uid), {
                fullname: supFullname,
                email: supEmail,
                phoneNumber: supPhonenumber,
                address: supAddress,
                center: supCenter,
                user : 'Supervisor',
                imgUrl: url,
                createdBy: JSON.parse(localStorage.getItem('RavsAuthUser'))['fullname'],
            });
            navigate('/dashboard')
        }) .catch ((err) => {
            if (err.message) {
                setError("Please check email address")
                setIsLoading(false)
            } 
        })
    }

    const handleSupervisor = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        setError('');
        const imageRef = ref(storage, `Proves/${supImg.name + v4()}`);
        uploadBytes(imageRef, supImg).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                UploadUser(url)
            });
        }); 
    }

    return ( 
        <div className="SupervisorPage">
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
                activeSupervisor={"active"}
                activeSettings={"active-sidenav"}
                activeHelp={"active-sidenav"} 
            />
            <section className="mainnav">
                <header>
                    <GetDate
                        role={role}    
                    />
                </header>
                <div className="addSupervisorPage">
                    <h2>Add Supervisor</h2>
                    <form action="" onSubmit={handleSupervisor}>
                        <div className="formInp">
                            <div className="inputGroup">
                                <input 
                                    type="text" 
                                    placeholder="FullName"  
                                    required
                                    id=""
                                    value={supFullname}
                                    onChange={(e) => setSupFullname(e.target.value)}
                                />
                            </div>
                            <div className="inputGroup">
                                <input 
                                    type="text" 
                                    placeholder="Email"  
                                    required
                                    id=""
                                    value={supEmail}
                                    onChange={(e) => setSupEmail(e.target.value)}
                                />
                            </div>
                            <div className="inputGroup">
                                <input 
                                    type="text" 
                                    placeholder="Address"  
                                    required
                                    id=""
                                    value={supAddress}
                                    onChange={(e) => setSupAddress(e.target.value)}
                                />
                            </div>
                            <div className="inputGroup">
                                <input 
                                    type="text" 
                                    placeholder="Center"  
                                    required
                                    id=""
                                    value={supCenter}
                                    onChange={(e) => setSupCenter(e.target.value)}
                                />
                            </div>
                            <div className="inputGroup">
                                <input 
                                    type="number"  
                                    placeholder="Phone number"  
                                    id=""
                                    required
                                    value={supPhonenumber}
                                    onChange={handlePhoneNumber}
                                />
                            </div>
                         </div>

                         <div className="profileDiv">
                            <div className="container">
                                <label htmlFor="arquivo">Upload Profile picture:</label>
                                <input 
                                    accept=".jpg, .jpeg, .png, .gif, .pdf" 
                                    className="inpdddut" 
                                    name="arquivo" 
                                    id="arquivo" 
                                    required
                                    type="file" 
                                    files={supImg}
                                    onChange={(e) => setSupImg(e.target.files[0])}
                                />
                                <button type="button" className="openCamera">Open Camera</button>
                            </div>
                         </div>

                         { isLoading 
                            ?
                            <div className="spinner">
                                <div className="spinnerin"></div>
                            </div> 
                            :
                            <button className="addSupBti" type="submit">
                                Upload
                            </button>
                         }

                         
                    </form>
                </div>
            </section>
        </div>
     );
}
 
export default Supervisor;
