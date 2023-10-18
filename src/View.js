import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
import QRCode from "qrcode";

const View = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [fullname, setFullname] = useState("");
  const [sex, setSex] = useState("");
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [occupation, setOccupation] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [state, setState] = useState("State of residence");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [lengthOfResidency, setLengthOfResidency] = useState("");
  const [firstWitnessFullName, setFirstWitnessFullName] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [center, setCenter] = useState("");
  const [qrImgLink, setQrImgLink] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const userId = params.id;

  const getUserData = async () => {
    const docRef = doc(db, "RAVS", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setFullname(
        docSnap.data().registeredData["surname"] +
          " " +
          docSnap.data().registeredData["othernames"]
      );
      setSex(docSnap.data().registeredData["sex"]);
      setLengthOfResidency(docSnap.data().registeredData["lengthOfResidency"]);
      setStateOfOrigin(docSnap.data().registeredData["stateOfOrigin"]);
      setOccupation(docSnap.data().registeredData["occupation"]);
      setFirstWitnessFullName(
        docSnap.data().registeredData["firstWitnessFullName"]
      );
      setBuildingType(docSnap.data().registeredData["buildingType"]);
      setState(docSnap.data().registeredData["state"]);
      setCity(docSnap.data().registeredData["city"]);
      setStreet(docSnap.data().registeredData["street"]);
      setCenter(docSnap.data().registeredData["registrationCenter"]);
      setDateTime(docSnap.data().dateTime.toDate());
      handleGenerateQr();
    } else {
      console.log("Data not found");
    }
  };

  const handleGenerateQr = async () => {
    const link = "http://localhost:3000/" + `${params.id}`;
    try {
      setQrImgLink(await QRCode.toDataURL(link));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (params) {
      try {
        getUserData();
      } catch {
        console.log("err");
      }
    } else {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="viewPage">
      <div className="displayA4">
        <div className="displayContent">
          <header className="displayContent-header">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ravs-53992.appspot.com/o/Meta%20Image%2FFCT-logo4.png?alt=media&token=21da7be1-19e2-4ebf-9855-82be30496051&_gl=1*xm4nwa*_ga*NjExMzY5MDM5LjE2NjkwOTY4NDY.*_ga_CW55HF8NVT*MTY5NzY0ODQ5Ni4yMDcuMS4xNjk3NjUxNDQ1LjQ1LjAuMA.."
              alt=""
            />
          </header>
          <div className="displayContent-content">
            <div className="content-header">
              <h2>FEDERAL CAPITAL TERRITORY ADMINISTRATION</h2>
              <h3>KNOW YOUR COMMUNITY TECHNOLOGY</h3>
              <h4>CERTIFICATE OF RESIDENCY</h4>
            </div>
            <div className="content-body">
              <div className="B-content body-title">
                <h3>Street</h3>
                <h3>L.G.A</h3>
                <h3>State</h3>
                <h3>Type fo building</h3>
              </div>
              <div className="B-content body-answer">
                <div className="answer-box">
                  <h5>{street}</h5>
                  <span>_________________</span>
                </div>
                <div className="answer-box">
                  <h5>{city}</h5>
                  <span>_________________</span>
                </div>
                <div className="answer-box">
                  <h5>{state}</h5>
                  <span>_________________</span>
                </div>
                <div className="answer-box">
                  <h5>{buildingType}</h5>
                  <span>_________________</span>
                </div>
              </div>
              <div className="B-content body-Qrcode">
                <p>Certificate ID</p>
                <img src={qrImgLink} alt="" />
                <p>KYCT/34/2456/398VD44</p>
              </div>
            </div>
            <div className="content-declaration">
              <p>
                This is to certify that the residency details of which are
                recoded here in has been registered on <br />
                <span>
                  {dateTime.getDate()} - {months[dateTime.getMonth()]} -{" "}
                  {dateTime.getFullYear()}
                </span>{" "}
                and approved in <span>F.C.T Abuja</span>
              </p>
              <div className="declaration-details">
                <div className="details-1">
                  <h4>Full Name :</h4>
                  <h4>Sex :</h4>
                  <h4>State of Origin :</h4>
                  <h4>Occupation :</h4>
                  <h4>Length of residency :</h4>
                  <h4>Witness Full Name :</h4>
                </div>
                <div className="details-2">
                  <div className="answer-box">
                    <span>{fullname}</span>
                  </div>
                  <div className="answer-box">
                    <span>{sex}</span>
                  </div>
                  <div className="answer-box">
                    <span>{stateOfOrigin}</span>
                  </div>
                  <div className="answer-box">
                    <span>{occupation}</span>
                  </div>
                  <div className="answer-box">
                    <span>{lengthOfResidency}</span>
                  </div>
                  <div className="answer-box">
                    <span>{firstWitnessFullName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accreditation">
            <h2>Accreditation</h2>
            <p>
              We are thrilled to announce that our esteemed organization has
              been awarded official accreditation for our highly regarded
              Certificate of Residency program. This accreditation serves as a
              testament to our commitment to excellence and the highest
              standards of quality in providing residency verification services.
            </p>
            <p className="b-2">
              Accreditation Body: KNOW YOUR COMMUNITY TECHNOLOGY
            </p>
            <p className="b-2"> Accreditation Status: Accredited </p>
            <p>
              The Certificate of Residency program has undergone a rigorous
              evaluation process, ensuring that it adheres to the most stringent
              industry guidelines and best practices. The accreditation is a
              significant achievement that recognizes our dedication to
              delivering accurate and reliable residency verification for
              individuals and organizations alike.
            </p>
          </div>
          <div className="signDate">
            <div className="sign">
              <h4>
                Date: <span>12-03-2020</span>{" "}
              </h4>
              <h4>
                <span>___________________________</span> <br /> Signature of
                Registrar{" "}
              </h4>
            </div>
            <div className="name">
              <h3>National residency regitation</h3>
              <h5>ng-dd566-338c-dffe-fe</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
