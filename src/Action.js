import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { UserAuth } from "./Context/AuthContext";


const Action = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [othername, setOthername] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [surname, setSurname] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [sex, setSex] = useState("")
    const [stateOfOrigin, setStateOfOrigin] = useState("")
    const [localGovernmentArea, setLocalGovernmentArea] = useState("")
    const [homeTown, setHomeTown] = useState("")
    const [occupation, setOccupation] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [buildingType, setBuildingType] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [street, setStreet] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")
    const [lengthOfResidency, setLengthOfResidency] = useState("")
    const [firstWitnessFullName, setFirstWitnessFullName] = useState("")
    const [firstWitnessRelationshipType, setFirstWitnessRelationshipType] = useState("")
    const [firstWitnessPhoneNumber, setFirstWitnessPhoneNumber] = useState("")
    const [secondWitnessFullName, setSecondWitnessFullName] = useState("")
    const [secondWitnessRelationshipType, setSecondWitnessRelationshipType] = useState("")
    const [secondWitnessPhoneNumber, setSecondWitnessPhoneNumber] = useState("")
    const [verification, setVerification] = useState(null)
    const [proveOfResidency, setProveOfResidency] = useState(null)
    const [photoImage, setPhotoImage] = useState(null)
    const [verifiedStatus, setVerifiedStatus] = useState(null)
    const [queryMessage, setQueryMessage] = useState("")
    const [queriedStatus, setQueriedStatus] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    const { user } = UserAuth()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();
    const userId =  params.id
    const role = JSON.parse(localStorage.getItem('RavsAuthUser'))['user']
    
    const getUserData = async () => {
        const docRef = doc(db, "RAVS", userId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setSurname(docSnap.data().registeredData['surname'])
                setOthername( docSnap.data().registeredData['othernames'])
                setSex(docSnap.data().registeredData['sex'])
                setLengthOfResidency(docSnap.data().registeredData['lengthOfResidency'])
                setStateOfOrigin(docSnap.data().registeredData['stateOfOrigin'])
                setOccupation(docSnap.data().registeredData['occupation'])
                setFirstWitnessFullName(docSnap.data().registeredData['firstWitnessFullName'])
                setBuildingType(docSnap.data().registeredData['buildingType'])
                setState(docSnap.data().registeredData['state'])
                setCity(docSnap.data().registeredData['city'])
                setFirstWitnessRelationshipType(docSnap.data().registeredData['firstWitnessRelationshipType'])
                setFirstWitnessPhoneNumber(docSnap.data().registeredData['firstWitnessPhoneNumber'])
                setSecondWitnessFullName(docSnap.data().registeredData['secondWitnessFullName'])
                setSecondWitnessRelationshipType(docSnap.data().registeredData['secondWitnessRelationshipType'])
                setSecondWitnessPhoneNumber(docSnap.data().registeredData['secondWitnessPhoneNumber'])
                setVerification(docSnap.data().registeredData['verification'])
                setProveOfResidency(docSnap.data().registeredData['proveOfResidency'])
                setPhotoImage(docSnap.data().registeredData['photoImage'])
                setLatitude(docSnap.data().registeredData['latitude'])
                setZipCode(docSnap.data().registeredData['zipCode'])
                setLongitude(docSnap.data().registeredData['longitude'])
                setStreet(docSnap.data().registeredData['street'])
                setPropertyType(docSnap.data().registeredData['propertyType'])
                setEmailAddress(docSnap.data().registeredData['emailAddress'])
                setAlternativePhoneNumber(docSnap.data().registeredData['alternativePhoneNumber'])
                setPhoneNumber(docSnap.data().registeredData['phoneNumber'])
                setHomeTown(docSnap.data().registeredData['homeTown'])
                setLocalGovernmentArea(docSnap.data().registeredData['localGovernmentArea'])
                setDateOfBirth(docSnap.data().registeredData['dateOfBirth'])
                setVerifiedStatus(docSnap.data().verified)
                setQueriedStatus(docSnap.data().queried)
                
            } else {
                console.log('Data not found')
            }
    }

    useEffect(() => {
        if (user) {
            getUserData()
         } else {
            navigate('/')
         }
    }, [])

    const AddressVerificationStatus = async (actionIn) => {
        setIsLoading(true)
        if (actionIn === "queried") {
            const washingtonRef = doc(db, "RAVS", `${userId}`);
            await updateDoc(washingtonRef, {
                verified : false,
                queried : true,
                approvedBy: "",
                queriedBy: JSON.parse(localStorage.getItem('RavsAuthUser'))['fullname'],
                queryMessage: queryMessage
            });
        } 
        if ( actionIn === "approve") {
            const washingtonRef = doc(db, "RAVS", `${userId}`);
            await updateDoc(washingtonRef, {
                queried : false,
                verified : true,
                approvedBy: JSON.parse(localStorage.getItem('RavsAuthUser'))['fullname'],
                queriedBy: "",
                queryMessage: ""
            }); 
        }
        window.location.reload()
    }


    return ( 
        <div className="editAddressPage">
            <section className="editAddress">
                <header>
                    <div className="info">
                        <span className="info-span-1">KYCT ({role}) {JSON.parse(localStorage.getItem('RavsAuthUser'))['center']}</span> 
                        <span className="info-span-2">{day}, {date} {month} {year}</span>
                    </div>
                </header>
                <div className="form-2">
                    <div className="ActionStart">
                        <div className="ActionStartGroup">
                            <label htmlFor="">Surname</label>
                            <h4>{othername}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Other Names</label>
                            <h4>{surname}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Email</label>
                            <h4>{emailAddress}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Date of Birth</label>
                            <h4>{dateOfBirth}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Sex</label>
                            <h4>{sex}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">State of Origin</label>
                            <h4>{stateOfOrigin}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Local Government Area</label>
                            <h4>{localGovernmentArea}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Home Town</label>
                            <h4>{homeTown}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Occupation</label>
                            <h4>{occupation}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Phone Number</label>
                            <h4>{phoneNumber}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Alternate Phone Number</label>
                            <h4>{alternativePhoneNumber}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">E-Mail Address</label>
                            <h4>{emailAddress}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Building Type</label>
                            <h4>{buildingType}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">House/Plot/Flat</label>
                            <h4>{propertyType}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Street</label>
                            <h4>{street}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">State</label>
                            <h4>{state}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">City</label>
                            <h4>{city}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Zip Code</label>
                            <h4>{zipCode}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Longitude</label>
                            <h4>{longitude}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Latitude</label>
                            <h4>{latitude}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Lenght of residency</label>
                            <h4>{lengthOfResidency}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">First Witness Full Name</label>
                            <h4>{firstWitnessFullName}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">First Witness Relationship</label>
                            <h4>{firstWitnessRelationshipType}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">First Witness Phone Number</label>
                            <h4>{firstWitnessPhoneNumber}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Second Witness Full Name</label>
                            <h4>{secondWitnessFullName}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Second Witness Relationship</label>
                            <h4>{secondWitnessRelationshipType}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Second Witness Phone Number</label>
                            <h4>{secondWitnessPhoneNumber}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Valid Identification</label>
                            <h4>{verification}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Proof of Residence</label>
                            <h4>{proveOfResidency}</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Profile Image</label>
                            <h4>{photoImage }</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Approve Status</label>
                            <h4>{ verifiedStatus ? "Approved" : "Not Approve" }</h4>
                        </div>
                        <div className="ActionStartGroup">
                            <label htmlFor="">Query Status</label>
                            <h4>{ queriedStatus ? "Queried" : "Not Queried" }</h4>
                        </div>
                    </div>
                </div>
            </section>

        
            { isLoading
            ?
            <div className="actionCenter">
                Loading...
            </div>
            :
            <div className="actionCenter">
                <div className="declidedQuery">
                    <button className="actBtn" type="button" onClick={(() => AddressVerificationStatus('queried'))}>
                        <span className="">Query</span>
                    </button>
                </div>

                { 
                    verifiedStatus 
                    ?
                         ""
                    :
                    <button className="actBtn approve" type="button" onClick={() => AddressVerificationStatus('approve')}>
                        <p>Approve</p>
                    </button>
                }
                
                
            </div>
            }
            
         </div>
        
     );
}
 
export default Action;