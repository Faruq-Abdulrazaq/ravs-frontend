import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";
import axios from 'axios';


const Edit = () => {
    const navigate = useNavigate()
    const { user } = UserAuth()
    const params = useParams()
    const [surname, setSurname] = useState("")
    const [fullName, setFullName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [sex, setSex] = useState("")
    const [Nationality, setNationality] = useState("")
    const [stateOfOrigin, setStateOfOrigin] = useState("State of Origin")
    const [localGovernmentArea, setLocalGovernmentArea] = useState("")
    const [homeTown, setHomeTown] = useState("")
    const [occupation, setOccupation] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [buildingType, setBuildingType] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [street, setStreet] = useState("")
    const [state, setState] = useState("State of residence")
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
    const role = JSON.parse(localStorage.getItem('RavsAuthUser'))['user']
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();
    const docId =  params.id


    useEffect(() => {
        if (params) {
            try {
                getData()
            } catch {
                console.log("err")
            }
        } else {
            navigate("/dashboard")
        }
    })

    const getData = async () => {
        const url = "https://fine-cyan-gharial-sari.cyclic.app/getOneData";
        try {
            const res = await axios.post(url, {
                headers: {},
                docId: docId
            });
            const data = res.data.data;
            console.log(data)
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <div className="editPage">
            <div className="editHeader">
                <header>
                    <div className="info">
                        <span className="info-span-1">KYCT ({role}) {JSON.parse(localStorage.getItem('RavsAuthUser'))['center']}</span> 
                        <span className="info-span-2">{day}, {date} {month} {year}</span>
                    </div>
                </header>
                <div className="editMain">
                    
                </div>
            </div>
        </div>
     );
}
 
export default Edit;