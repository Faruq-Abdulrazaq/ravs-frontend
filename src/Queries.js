import axios from 'axios';
import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link} from "react-router-dom";


const Queries = () => {

    const navigate = useNavigate()
    const { user } = UserAuth()
    const [userFullname, setUserFullname] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [role, setRole] = useState("")
    const [totalQueried, setTotalQueried] = useState([])
    const uploadedBy = JSON.parse(localStorage.getItem('RavsAuthUser'))['fullname']

    useEffect(() => {
        if (user) {
            const local = JSON.parse(localStorage.getItem('RavsAuthUser'));
            setUserFullname(local.fullname)
            setEmail(local.email)
            setProfileUrl(local.imgUrl)
            setRole(local.user)
            getData()
        } else {
            navigate('/')
        }
    }, [0])

    const getData = async () => {
        const url = "https://fine-cyan-gharial-sari.cyclic.app/getQuery";
        try {
            const res = await axios.post(url, {
                headers: {},
                uploadedBy: uploadedBy
            });
            const data = res.data.data;
            setTotalQueried(data)
        } catch (err) {
            console.log(err);
        }
    }

    

    return ( 
        <div className="QueresPage">
            <SideNav 
                userSurname={userFullname}
                email={email}
                profileUrl={profileUrl}
                role={role}
                activeDashboard={"active"}
                activeAll={"active-sidenav"}
                activeStates={"active-sidenav"}
                activeManage={"active-sidenav"}
                activeAdd={"active-sidenav"}
                activeSupervisor={"active-sidenav"}
                activeSettings={"active-sidenav"}
                activeHelp={"active-sidenav"}

            />
            <section className="mainnav">
                <header>
                    <GetDate
                        role={role}
                    />
                </header>
                <div className="queryShow">
                    <h3></h3>
                    <h1 className="h1-address">Queres</h1>

                    <section className="section-address">
                    
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead >
                                <tr className="tbl-header">
                                    <th>Surname</th>
                                    <th>Other Names</th>
                                    <th>Sex</th>
                                    <th>Nationality</th>
                                    <th>State of Origin</th>
                                    <th>Local Government Area</th>
                                    <th>Home Town</th>
                                    <th>Occupation</th>
                                    <th>Phone Number</th>
                                    <th>Alternate Phone Number</th>
                                    <th>E-Mail Address</th>
                                    <th>Building Type</th>
                                    <th>House/Plot/Flat</th>
                                    <th>Street</th>
                                    <th>State of residence</th>
                                    <th>City</th>
                                    <th>Zip Code</th>
                                    <th>Logitude</th>
                                    <th>Latitude</th>
                                    <th>Duration of Stay</th>
                                    <th>First Witness Full Name</th>
                                    <th>First Witness Relationship</th>
                                    <th>First Witness Phone Number</th>
                                    <th>Second Witness Full Name</th>
                                    <th>Second Witness Relationship</th>
                                    <th>Second Witness Phone Number</th>
                                    <th>Valid Identification</th>
                                    <th>Profile Picture</th>
                                    <th>Proof of Residence</th>
                                    <th>Query Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>


                            {totalQueried.map(table => (
                                <tbody key={table._id}>
                                    <tr>                                    
                                        <td>{table.fromDb['registeredData'].surname}</td>
                                        <td>{table.fromDb['registeredData'].othernames}</td>
                                        <td>{table.fromDb['registeredData'].sex}</td>
                                        <td>{table.fromDb['registeredData'].nationality}</td>
                                        <td>{table.fromDb['registeredData'].stateOfOrigin}</td>
                                        <td>{table.fromDb['registeredData'].localGovernmentArea}</td>
                                        <td>{table.fromDb['registeredData'].homeTown}</td>
                                        <td>{table.fromDb['registeredData'].occupation}</td>
                                        <td>{table.fromDb['registeredData'].phoneNumber}</td>
                                        <td>{table.fromDb['registeredData'].alternativePhoneNumber}</td>
                                        <td>{table.fromDb['registeredData'].emailAddress}</td>
                                        <td>{table.fromDb['registeredData'].buildingType}</td>
                                        <td>{table.fromDb["registeredData"].propertyType}</td>
                                        <td>{table.fromDb["registeredData"].street}</td>
                                        <td>{table.fromDb["registeredData"].state}</td>
                                        <td>{table.fromDb["registeredData"].city}</td>
                                        <td>{table.fromDb["registeredData"].zipCode}</td>
                                        <td>{table.fromDb["registeredData"].longitude}</td>
                                        <td>{table.fromDb["registeredData"].latitude}</td>
                                        <td>{table.fromDb["registeredData"].lengthOfResidency}</td>
                                        <td>{table.fromDb["registeredData"].firstWitnessFullName}</td>
                                        <td>{table.fromDb["registeredData"].firstWitnessRelationshipType}</td>
                                        <td>{table.fromDb["registeredData"].firstWitnessPhoneNumber}</td>
                                        <td>{table.fromDb["registeredData"].secondWitnessFullName}</td>
                                        <td>{table.fromDb["registeredData"].secondWitnessRelationshipType}</td>
                                        <td>{table.fromDb["registeredData"].secondWitnessPhoneNumber}</td>
                                        <td>{table.fromDb["registeredData"].verification}</td>
                                        <td>{table.fromDb["registeredData"].proveOfResidency}</td>
                                        <td>{table.fromDb["registeredData"].photoImage}</td>
                                        <td>{table.fromDb.queryMessage}</td>
                                        <td> 
                                            <Link to={'/edit/' + table._id} target="_blank"><button className='open'>Edit</button></Link> 
                                        </td>
                                    
                                    </tr>
                                </tbody>
                            ))}
                            
                        </table>

                    </section>
                </div>
            </section>
        </div>
     );
}
 
export default Queries;