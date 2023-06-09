import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = (props) => {
    const navigate = useNavigate();
    const registeredData = {
        surname: props.surname,
        othernames: props.fullname,
        dateOfBirth: props.dob,
        sex: props.sex,
        stateOfOrigin: props.sor,
        localGovernmentArea: props.lga,
        homeTown: props.homeTown,
        occupation: props.occupation,
        phoneNumber: props.phoneNumber,
        alternativePhoneNumber: props.alternativePhoneNumber,
        emailAddress: props.emailAddress,
        buildingType : props.buildingType,
        propertyType: props.propertyType,
        street: props.street,
        state: props.state,
        city: props.city,
        zipCode: props.zipCode,
        longitude: props.longitude,
        latitude: props.latitude,
        lengthOfResidency: props.lengthOfResidency,
        firstWitnessFullName: props.firstWitnessFullName,
        firstWitnessRelationshipType: props.firstWitnessRelationshipType,
        firstWitnessPhoneNumber: props.firstWitnessPhoneNumber,
        secondWitnessFullName: props.secondWitnessFullName,
        secondWitnessRelationshipType: props.secondWitnessRelationshipType,
        secondWitnessPhoneNumber: props.secondWitnessPhoneNumber,
        verification : "https://carrascos.com",
        proveOfResidency: "https://carrascos.com/Residency",
        photoImage: "https://carrascos.com/img"
    }

    
    const handleUpload = async () => {
        const url = "https://fine-cyan-gharial-sari.cyclic.app/upload";
        try {
            const res = await axios.post(url, {
                headers: {},
                params: {
                    registeredData: registeredData,
                    date: new Date(),
                    verified: false,
                }
            });
            navigate('/Dashboard')
        } catch (err) {
            console.log(err);
        }
    }
    return ( 
        <div className="form-1">
            <div className="confirmationPage">
                <div className="confirmationGroup">
                    <label htmlFor="">Surname</label>
                    <h4>{props.surname}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Other Names</label>
                    <h4>{props.fullname}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Date of Birth</label>
                    <h4>{props.dob}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Sex</label>
                    <h4>{props.sex}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">State of Origin</label>
                    <h4>{props.sor}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Local Government Area</label>
                    <h4>{props.lga}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Home Town</label>
                    <h4>{props.hometown}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Occupation</label>
                    <h4>{props.occupation}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Phone Number</label>
                    <h4>{props.phoneNumber}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Alternate Phone Number</label>
                    <h4>{props.alternativePhoneNumber}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">E-Mail Address</label>
                    <h4>{props.emailAddress}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Building Type</label>
                    <h4>{props.buildingType}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">House/Plot/Flat</label>
                    <h4>{props.propertyType}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Street</label>
                    <h4>{props.street}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">State</label>
                    <h4>{props.state}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">City</label>
                    <h4>{props.city}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Zip Code</label>
                    <h4>{props.zipCode}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Logitude</label>
                    <h4>{props.longitude}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Latitude</label>
                    <h4>{props.latitude}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Duration of Stay</label>
                    <h4>{props.lengthOfResidency}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">First Witness Full Name</label>
                    <h4>{props.firstWitnessFullName}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">First Witness Relationship</label>
                    <h4>{props.firstWitnessRelationshipType}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">First Witness Phone Number</label>
                    <h4>{props.firstWitnessPhoneNumber}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Second Witness Full Name</label>
                    <h4>{props.secondWitnessFullName}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Second Witness Relationship</label>
                    <h4>{props.secondWitnessRelationshipType}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Second Witness Phone Number</label>
                    <h4>{props.secondWitnessPhoneNumber}</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Valid Identification</label>
                    <h4>Nill</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Proof of Residence</label>
                    <h4>Nill</h4>
                </div>
                <div className="confirmationGroup">
                    <label htmlFor="">Profile Image</label>
                    <h4>Nill</h4>
                </div>
            </div>

                <button className="saveBtn" type="button" onClick={handleUpload}>
                    <p>Save</p>
                    <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                    </svg>
                </button>
        </div>
     );
}
 
export default ConfirmationPage;