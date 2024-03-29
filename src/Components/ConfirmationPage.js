import axios from "axios";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../Firebase";
import { doc, updateDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import ErrorPopup from "./ErrorPopup";

const ConfirmationPage = (props) => {
  const navigate = useNavigate();
  const [verificationLink, setVerificationLink] = useState("");
  const [proveOfResidencyLink, setProveOfResidencyLink] = useState("");
  const [photoImageLink, setPhotoImageLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [popupStatus, setPopupStatus] = useState(false);
  const [ifRightToUploadFiles, setifRightToUploadFiles] = useState(false);
  const [isLoadingUpload, setIsLoadingUpload] = useState(false);
  useEffect(() => {
    checkFiles();
  }, []);

  const registeredData = {
    surname: props.surname,
    othernames: props.fullname,
    dateOfBirth: props.dob,
    sex: props.sex,
    nationality: props.Nationality,
    stateOfOrigin: props.sor,
    localGovernmentArea: props.lga,
    homeTown: props.homeTown,
    occupation: props.occupation,
    phoneNumber: props.phoneNumber,
    alternativePhoneNumber: props.alternativePhoneNumber,
    emailAddress: props.emailAddress,
    buildingType: props.buildingType,
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
    verification: verificationLink,
    proveOfResidency: proveOfResidencyLink,
    photoImage: photoImageLink,
    registrationCenter: JSON.parse(localStorage.getItem("RavsAuthUser"))[
      "center"
    ],
  };

  const compulsoryData = {
    surname: props.surname,
    othernames: props.fullname,
    dateOfBirth: props.dob,
    sex: props.sex,
    stateOfOrigin: props.sor,
    localGovernmentArea: props.lga,
    homeTown: props.homeTown,
    occupation: props.occupation,
    phoneNumber: props.phoneNumber,
    emailAddress: props.emailAddress,
    buildingType: props.buildingType,
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
    verification: verificationLink,
    proveOfResidency: proveOfResidencyLink,
    photoImage: photoImageLink,
  };

  const checkFiles = () => {
    if (props.proveOfResidency || props.photoImage || props.verification) {
      setifRightToUploadFiles(false);
    } else {
      setifRightToUploadFiles(true);
    }
  };

  const uploadProve = async () => {
    setIsLoadingUpload(true);
    if (props.proveOfResidency) {
      const proveOfResidencyimageRef = ref(
        storage,
        `Proves/${props.proveOfResidency.name + v4()}`
      );
      uploadBytes(proveOfResidencyimageRef, props.proveOfResidency).then(
        (snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setProveOfResidencyLink(url);
          });
        }
      );
    }
    if (props.photoImage) {
      const photoImageimageRef = ref(
        storage,
        `Proves/${props.photoImage.name + v4()}`
      );
      uploadBytes(photoImageimageRef, props.photoImage).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setPhotoImageLink(url);
        });
      });
    }
    if (props.verification) {
      const verificationimageRef = ref(
        storage,
        `Proves/${props.verification.name + v4()}`
      );
      uploadBytes(verificationimageRef, props.verification).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setVerificationLink(url);
        });
      });
    }

    setIsLoadingUpload(false);
    setifRightToUploadFiles(true);
  };

  const handleUpload = async () => {
    setIsLoading(true);
    const count = [];
    for (let g in compulsoryData) {
      if (compulsoryData[g] === "") {
        count.push(compulsoryData[g]);
      }
    }
    console.log(count.length);
    if (count.length <= 6) {
      const url = "https://fine-cyan-gharial-sari.cyclic.app/upload";
      try {
        const res = await axios.post(url, {
          headers: {},
          registeredData: registeredData,
          verified: false,
          uploadedBy: JSON.parse(localStorage.getItem("RavsAuthUser"))[
            "fullname"
          ],
          queriedBy: "",
          approvedBy: "",
          queryMessage: "",
        });
        setIsLoading(false);

        navigate("/Dashboard");
      } catch (err) {
        console.log(err);
      }
    } else {
      setErrorMessage("Fill out all the compulsory form fields (*) ");
      setPopupStatus(true);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <div className="form-1">
      <div className="confirmationPage">
        <div className="confirmationGroup">
          <label htmlFor="">Surname *</label>
          <h4>{props.surname}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Other Names *</label>
          <h4>{props.fullname}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Date of Birth *</label>
          <h4>{props.dob}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Sex *</label>
          <h4>{props.sex}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Nationality *</label>
          <h4>{props.Nationality}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">State of Origin *</label>
          <h4>{props.sor}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Local Government Area *</label>
          <h4>{props.lga}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Home Town *</label>
          <h4>{props.homeTown}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Occupation *</label>
          <h4>{props.occupation}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Phone Number *</label>
          <h4>{props.phoneNumber}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Alternate Phone Number</label>
          <h4>{props.alternativePhoneNumber}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">E-Mail Address *</label>
          <h4>{props.emailAddress}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Building Type *</label>
          <h4>{props.buildingType}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">House/Plot/Flat *</label>
          <h4>{props.propertyType}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Street *</label>
          <h4>{props.street}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">State *</label>
          <h4>{props.state}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">City *</label>
          <h4>{props.city}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Zip Code *</label>
          <h4>{props.zipCode}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Longitude *</label>
          <h4>{props.longitude}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Latitude *</label>
          <h4>{props.latitude}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Lenght of residency *</label>
          <h4>{props.lengthOfResidency}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">First Witness Full Name *</label>
          <h4>{props.firstWitnessFullName}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">First Witness Relationship *</label>
          <h4>{props.firstWitnessRelationshipType}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">First Witness Phone Number *</label>
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
          <label htmlFor="">Valid Identification *</label>
          <h4>{props.verification ? props.verification.name : ""}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Proof of Residence *</label>
          <h4>{props.proveOfResidency ? props.proveOfResidency.name : ""}</h4>
        </div>
        <div className="confirmationGroup">
          <label htmlFor="">Profile Image *</label>
          <h4>{props.photoImage ? props.photoImage.name : ""}</h4>
        </div>
      </div>

      {ifRightToUploadFiles ? (
        <div className="buttonDiv">
          {isLoading ? (
            <button className="saveBtn" type="button" disabled>
              <span className="loader"></span>
            </button>
          ) : (
            <button className="saveBtn" type="button" onClick={handleUpload}>
              <p>Save</p>
            </button>
          )}
        </div>
      ) : (
        <div className="buttonDiv">
          {isLoadingUpload ? (
            <div className="uploader"></div>
          ) : (
            <button className="uploadBtn" type="button" onClick={uploadProve}>
              Upload Files
            </button>
          )}
        </div>
      )}

      <ErrorPopup
        trigger={popupStatus}
        setTrigger={setPopupStatus}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default ConfirmationPage;
