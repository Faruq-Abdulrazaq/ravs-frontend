import SideNav from "./Components/SideNav";
import Prove from "./Components/Prove";
import PersonalInformation from "./Components/PersonalInformation";
import ContactInfomation from "./Components/ContactInformation";
import NewAddress from "./Components/NewAddress";
import WitnessInformation from "./Components/WitnessInformation";
import ConfirmationPage from "./Components/ConfirmationPage";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";

const AddAddress = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [userFullname, setUserFullname] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [surname, setSurname] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [sex, setSex] = useState("");
  const [Nationality, setNationality] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("State of Origin");
  const [localGovernmentArea, setLocalGovernmentArea] = useState("");
  const [homeTown, setHomeTown] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativePhoneNumber, setAlternativePhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [street, setStreet] = useState("");
  const [state, setState] = useState("State of residence");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [lengthOfResidency, setLengthOfResidency] = useState("");
  const [firstWitnessFullName, setFirstWitnessFullName] = useState("");
  const [firstWitnessRelationshipType, setFirstWitnessRelationshipType] =
    useState("");
  const [firstWitnessPhoneNumber, setFirstWitnessPhoneNumber] = useState("");
  const [secondWitnessFullName, setSecondWitnessFullName] = useState("");
  const [secondWitnessRelationshipType, setSecondWitnessRelationshipType] =
    useState("");
  const [secondWitnessPhoneNumber, setSecondWitnessPhoneNumber] = useState("");
  const [verification, setVerification] = useState(null);
  const [proveOfResidency, setProveOfResidency] = useState(null);
  const [photoImage, setPhotoImage] = useState(null);
  const [checkCurrentComponent, setCheckCurrentComponent] = useState(
    "<PersonalInformation/>"
  );
  const [role, setRole] = useState("");

  useEffect(() => {
    if (user) {
      const local = JSON.parse(localStorage.getItem("RavsAuthUser"));
      setEmail(local.email);
      setUserFullname(local.fullname);
      setProfileUrl(local.imgUrl);
      setRole(local.user);
    } else {
      navigate("/");
    }
  }, [0]);

  const getLoc = () => {
    navigator.geolocation.getCurrentPosition((postion) => {
      setLatitude(postion.coords.latitude);
      setLongitude(postion.coords.longitude);
    });
  };

  const goNext = () => {
    switch (checkCurrentComponent) {
      case "<PersonalInformation/>":
        return setCheckCurrentComponent("<ContactInfomation/>");
      case "<ContactInfomation/>":
        return setCheckCurrentComponent("<NewAddress/>");
      case "<NewAddress/>":
        return setCheckCurrentComponent("<WitnessInformation/>");
      case "<WitnessInformation/>":
        return setCheckCurrentComponent("<Prove/>");
      case "<Prove/>":
        return setCheckCurrentComponent("<ConfirmationPage/>");
      case "<ConfirmationPage/>":
        return setCheckCurrentComponent("<PersonalInformation/>");
    }
  };
  const goBack = () => {
    switch (checkCurrentComponent) {
      case "<ConfirmationPage/>":
        return setCheckCurrentComponent("<Prove/>");
      case "<Prove/>":
        return setCheckCurrentComponent("<WitnessInformation/>");
      case "<WitnessInformation/>":
        return setCheckCurrentComponent("<NewAddress/>");
      case "<NewAddress/>":
        return setCheckCurrentComponent("<ContactInfomation/>");
      case "<ContactInfomation/>":
        return setCheckCurrentComponent("<PersonalInformation/>");
      case "<PersonalInformation/>":
        return setCheckCurrentComponent("<PersonalInformation/>");
    }
  };
  return (
    <div className="AddAddressPage">
      <SideNav
        userSurname={userFullname}
        email={email}
        profileUrl={profileUrl}
        role={role}
        activeDashboard={"active-sidenav"}
        activeAll={"active-sidenav"}
        activeStates={"active-sidenav"}
        activeManage={"active-sidenav"}
        activeAdd={"active"}
        activeSupervisor={"active-sidenav"}
        activeSettings={"active-sidenav"}
        activeHelp={"active-sidenav"}
      />
      <section className="startSection">
        {checkCurrentComponent === "<PersonalInformation/>" ? (
          <PersonalInformation
            surname={surname}
            setSurname={setSurname}
            fullname={fullName}
            setFullname={setFullName}
            dob={dateOfBirth}
            setdob={setDateOfBirth}
            setSex={setSex}
            sex={sex}
            Nationality={Nationality}
            setNationality={setNationality}
            sor={stateOfOrigin}
            setSor={setStateOfOrigin}
            lga={localGovernmentArea}
            setLga={setLocalGovernmentArea}
            homeTown={homeTown}
            setHomeTown={setHomeTown}
            role={role}
          />
        ) : checkCurrentComponent === "<ContactInfomation/>" ? (
          <ContactInfomation
            setOccupation={setOccupation}
            occupation={occupation}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            alternativePhoneNumber={alternativePhoneNumber}
            setAlternativePhoneNumber={setAlternativePhoneNumber}
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            role={role}
          />
        ) : checkCurrentComponent === "<NewAddress/>" ? (
          <NewAddress
            setBuildingType={setBuildingType}
            buildingType={buildingType}
            setState={setState}
            state={state}
            setCity={setCity}
            setPropertyType={setPropertyType}
            propertyType={propertyType}
            city={city}
            street={street}
            setStreet={setStreet}
            setZipCode={setZipCode}
            zipCode={zipCode}
            setLengthOfResidency={setLengthOfResidency}
            lengthOfResidency={lengthOfResidency}
            setLongitude={setLongitude}
            setLatitude={setLatitude}
            longitude={longitude}
            latitude={latitude}
            getLocation={getLoc}
            role={role}
          />
        ) : checkCurrentComponent === "<WitnessInformation/>" ? (
          <WitnessInformation
            setFirstWitnessFullName={setFirstWitnessFullName}
            firstWitnessFullName={firstWitnessFullName}
            secondWitnessFullName={secondWitnessFullName}
            setSecondWitnessFullName={setSecondWitnessFullName}
            setFirstWitnessPhoneNumber={setFirstWitnessPhoneNumber}
            firstWitnessPhoneNumber={firstWitnessPhoneNumber}
            setSecondWitnessPhoneNumber={setSecondWitnessPhoneNumber}
            secondWitnessPhoneNumber={secondWitnessPhoneNumber}
            setFirstWitnessRelationshipType={setFirstWitnessRelationshipType}
            firstWitnessRelationshipType={firstWitnessRelationshipType}
            secondWitnessRelationshipType={secondWitnessRelationshipType}
            setSecondWitnessRelationshipType={setSecondWitnessRelationshipType}
            role={role}
          />
        ) : checkCurrentComponent === "<Prove/>" ? (
          <Prove
            photoImage={photoImage}
            setPhotoImage={setPhotoImage}
            verification={verification}
            setVerification={setVerification}
            proveOfResidency={proveOfResidency}
            setProveOfResidency={setProveOfResidency}
            role={role}
          />
        ) : (
          <ConfirmationPage
            firstWitnessFullName={firstWitnessFullName}
            secondWitnessFullName={secondWitnessFullName}
            firstWitnessPhoneNumber={firstWitnessPhoneNumber}
            secondWitnessPhoneNumber={secondWitnessPhoneNumber}
            firstWitnessRelationshipType={firstWitnessRelationshipType}
            secondWitnessRelationshipType={secondWitnessRelationshipType}
            Nationality={Nationality}
            setNationality={setNationality}
            photoImage={photoImage}
            verification={verification}
            proveOfResidency={proveOfResidency}
            propertyType={propertyType}
            city={city}
            zipCode={zipCode}
            longitude={longitude}
            latitude={latitude}
            phoneNumber={phoneNumber}
            alternativePhoneNumber={alternativePhoneNumber}
            emailAddress={emailAddress}
            surname={surname}
            fullname={fullName}
            dob={dateOfBirth}
            sor={stateOfOrigin}
            lga={localGovernmentArea}
            homeTown={homeTown}
            street={street}
            occupation={occupation}
            sex={sex}
            buildingType={buildingType}
            state={state}
            lengthOfResidency={lengthOfResidency}
          />
        )}

        {checkCurrentComponent === "<ConfirmationPage/>" ? (
          <div className="actionBtn">
            <button className="backBtn saveBtn" type="button" onClick={goBack}>
              <p>Back</p>
            </button>
          </div>
        ) : (
          <div className="actionBtn">
            <button className="nextBtn" type="button" onClick={goBack}>
              <p>Back</p>
            </button>

            <button className="nextBtn" type="button" onClick={goNext}>
              <p>Next</p>
              <svg
                strokeWidth="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AddAddress;
