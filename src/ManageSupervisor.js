import SideNav from "./Components/SideNav";
import GetDate from "./Components/Getdate";
import { UserAuth } from "./Context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

const ManageSupervisor = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();
  const [userFullname, setUserFullname] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [role, setRole] = useState("");
  const [supervisors, setSupervisors] = useState([]);

  useEffect(() => {
    if (user) {
      const local = JSON.parse(localStorage.getItem("RavsAuthUser"));
      setEmail(local.email);
      setUserFullname(local.fullname);
      setProfileUrl(local.imgUrl);
      setRole(local.user);
      getAllSupervisors();
    } else {
      navigate("/");
    }
  }, [0]);

  const getAllSupervisors = async () => {
    const supervisors = [];
    const querySnapshot = await getDocs(collection(db, "UsersRavs"));
    querySnapshot.forEach((doc) => {
      const supervisorsId = doc.id;
      const supervisorsData = doc.data();
      supervisors.push({
        supervisorsId: supervisorsId,
        supervisorsData: supervisorsData,
      });
      setSupervisors(supervisors);
    });
  };
  return (
    <div className="ManageSupervisor">
      <SideNav
        userSurname={userFullname}
        email={email}
        profileUrl={profileUrl}
        role={role}
        activeDashboard={"active-sidenav"}
        activeAll={"active-sidenav"}
        activeStates={"active-sidenav"}
        activeManage={"active"}
        activeAdd={"active-sidenav"}
        activeSupervisor={"active-sidenav"}
        activeSettings={"active-sidenav"}
        activeHelp={"active-sidenav"}
      />
      <section className="mainnav">
        <header>
          <GetDate role={role} />
        </header>
        <div className="ManageSupervisor-bar">
          <h3>Manage Supervisors</h3>
          <div className="supervisorView">
            {supervisors.map((supervisor) => (
              <div
                className="supervisorBox"
                key={supervisor.supervisorsId}
                onClick={() =>
                  navigate("/editsupervisor", { props: { supervisor } })
                }
              >
                {console.log(supervisor)}
                <h4>Fullname</h4>
                <p>{supervisor.supervisorsData["fullname"]}</p>
                <h4>Email</h4>
                <p>{supervisor.supervisorsData["email"]}</p>
                <h4>Center</h4>
                <p>{supervisor.supervisorsData["center"]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageSupervisor;
