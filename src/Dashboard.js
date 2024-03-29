import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "./Firebase";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [userFullname, setUserFullname] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [role, setRole] = useState("");
  const [dbVerify, setDbVerify] = useState(null);
  const [dbNotVerify, setNotDbVerify] = useState(null);
  const [totalRegistered, setTotalRegistered] = useState(null);
  const [totalQueried, setTotalQueried] = useState(null);
  const [uploadedByMe, setUploadedByMe] = useState(null);
  const uploadedBy = JSON.parse(localStorage.getItem("RavsAuthUser"))[
    "fullname"
  ];

  useEffect(() => {
    if (user) {
      const local = JSON.parse(localStorage.getItem("RavsAuthUser"));
      setUserFullname(local.fullname);
      setEmail(local.email);
      setProfileUrl(local.imgUrl);
      setRole(local.user);
      getData();
    } else {
      navigate("/");
    }
  }, [0]);

  const getData = async () => {
    const unVerified = [];
    const uploadedByMe = [];
    const verified = [];
    const queried = [];
    const totalRegistered = [];

    const unVerifiedQuerySnapshot = query(
      collection(db, "RAVS"),
      where("verified", "==", false)
    );
    const unVerifiedQuerySnapt = await getDocs(unVerifiedQuerySnapshot);
    unVerifiedQuerySnapt.forEach((doc) => {
      unVerified.push(doc.data());
    });
    setNotDbVerify(unVerified.length);

    const uploadedByMeQuerySnapshot = query(
      collection(db, "RAVS"),
      where("uploadedBy", "==", `${uploadedBy}`)
    );
    const uploadedByMeQuerySnapt = await getDocs(uploadedByMeQuerySnapshot);
    uploadedByMeQuerySnapt.forEach((doc) => {
      uploadedByMe.push(doc.data());
    });
    setUploadedByMe(uploadedByMe.length);

    const verifiedQuerySnapshot = query(
      collection(db, "RAVS"),
      where("verified", "==", true)
    );
    const querySnapshot = await getDocs(verifiedQuerySnapshot);
    querySnapshot.forEach((doc) => {
      verified.push(doc.data());
    });
    setDbVerify(verified.length);

    const totalQueriedQuerySnapshot = query(
      collection(db, "RAVS"),
      where("uploadedBy", "==", `${uploadedBy}`)
    );
    const totalQueriedSnapshot = await getDocs(totalQueriedQuerySnapshot);
    totalQueriedSnapshot.forEach((doc) => {
      if (doc.data().queried) {
        queried.push(doc.data());
      }
    });
    setTotalQueried(queried.length);

    const registeredQuerySnapshot = query(collection(db, "RAVS"));
    const registeredSnapshot = await getDocs(registeredQuerySnapshot);
    registeredSnapshot.forEach((doc) => {
      totalRegistered.push(doc.data());
    });
    setTotalRegistered(totalRegistered.length);
  };
  return (
    <div className="dashboardPage">
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
          <GetDate role={role} />
        </header>
        <div className="main-status-bar">
          <div className="total-reg stb-c">
            <s className="stb-c-icon">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/icons/address-location-map-svgrepo-com.png"
                }
                alt=""
              />
            </s>
            <div className="stb-c-digits">
              <h1>{totalRegistered}</h1>
              <p>Total Registered Addresses</p>
            </div>
          </div>
          {role === "Admin" ? (
            <div className="total-reg stb-c">
              <s className="stb-c-icon">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/icons/align-from-right-svgrepo-com.png"
                  }
                  alt=""
                />
              </s>
              <div className="stb-c-digits">
                <h1>{dbNotVerify}</h1>
                <p>Not verified</p>
              </div>
            </div>
          ) : (
            <div className="total-reg stb-c">
              <s className="stb-c-icon">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/icons/align-from-right-svgrepo-com.png"
                  }
                  alt=""
                />
              </s>
              <div className="stb-c-digits">
                <h1>{uploadedByMe}</h1>
                <p>Uploaded by me</p>
              </div>
            </div>
          )}

          <div className="total-reg stb-c">
            <s className="stb-c-icon">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/icons/align-horizontal-right-svgrepo-com.png"
                }
                alt=""
              />
            </s>
            <div className="stb-c-digits">
              <h1>{dbVerify}</h1>
              <p>Verified</p>
            </div>
          </div>
          {role === "Admin" ? (
            <div className="total-reg stb-c">
              <s className="stb-c-icon">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/icons/map-round-667-svgrepo-com.png"
                  }
                  alt=""
                />
              </s>
              <div className="stb-c-digits">
                <p>View Maps</p>
              </div>
            </div>
          ) : (
            <div className="total-reg stb-c">
              <s className="stb-c-icon">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/icons/map-round-667-svgrepo-com.png"
                  }
                  alt=""
                />
              </s>
              <div className="stb-c-digits">
                <h1>{totalQueried}</h1>
                <Link to="/Queries" className="queried">
                  Queres
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="main-nav-area">
          <span>
            <img
              src={
                process.env.PUBLIC_URL + "/icons/map-round-667-svgrepo-com.png"
              }
              alt=""
            />
            Map
          </span>
          <map name="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84170368382!2d7.367465777397207!3d9.024246820730172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1685999535167!5m2!1sen!2sng"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </map>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
