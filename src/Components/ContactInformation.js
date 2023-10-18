import GetDate from "../Components/Getdate";

const ContactInfomation = (props) => {
  const Occupations = [
    "Occupation *",
    "Administrative / Office & Operations",
    "Agricultural & Agro Allied",
    "Analyst / Data Analyst",
    "Architect",
    "Automobile & Car Services",
    "Aviation",
    "Banking",
    "Business Development & Sales",
    "Compliance / Audit & Risk Management",
    "Construction & Mining",
    "Consultancy",
    "Customer Service / Front Desk / Receptionist",
    "Domestic Services/ Cleaning",
    "Educational Services/ Teaching",
    "Engineering",
    "Executive & Management",
    "Fashion & Beauty",
    "Federal Government",
    "Finance / Accounting & Insurance",
    "Fresh Graduates / NYSC & PPA",
    "Graphics Designer & Editing",
    "Health & MedicalHotel / Hospitality",
    "HSE / Health, Safety & Environment",
    "Human Resources / HR",
    "Installation, Maintenance & Repair",
    "Internship & Industrial Training",
    "IT / Webmaster & ComputerLaw / Legal",
    "Librarian",
    "Manufacturing & Production",
    "Maritime Services / Shipping",
    "Marketing / Advertising & PR",
    "Media / Journalism & Entertainment",
    "Monitoring and Evaluation (M&E)",
    "NGO / Nonprofit",
    "Oil and Gas",
    "Others",
    "Procurement & Supply Chain",
    "Programming / Web development",
    "Project / Product Management",
    "Quality Control/Assurance",
    "Real Estate / Property",
    "Research",
    "Restaurant / Chef & Catering",
    "Secretary / PASecurity & Law Enforcement",
    "Sports / Fitness and Recreation",
    "Surveying",
    "TelecommunicationTourism & Travels",
    "Transportation/ Driving & Logistics",
  ];
  const handlePhoneNumber = (e) => {
    if (props.phoneNumber.length != 11) {
      props.setPhoneNumber(e.target.value);
    } else {
      var str = props.phoneNumber;
      str = str.substring(0, str.length - 1);
      props.setPhoneNumber(str);
    }
  };

  const handleAltPhoneNumber = (e) => {
    if (props.alternativePhoneNumber.length != 11) {
      props.setAlternativePhoneNumber(e.target.value);
    } else {
      var str = props.alternativePhoneNumber;
      str = str.substring(0, str.length - 1);
      props.setAlternativePhoneNumber(str);
    }
  };

  return (
    <section className="addAddress">
      <header>
        <GetDate role={props.role} />
      </header>
      <div className="addAddress-form">
        <div className="form-1">
          <p>
            Contact Infomation <br /> (2-5)
          </p>
          <div className="contactInformation">
            <div className="inputGroup">
              <select
                type="dropdown"
                value={props.occupation}
                onChange={(e) => props.setOccupation(e.target.value)}
                required
              >
                {Occupations.map((occupation) => (
                  <option value={occupation} key={occupation}>
                    {occupation}
                  </option>
                ))}
              </select>
            </div>
            {props.occupation === "Others" ? (
              <div className="inputGroup">
                <input type="number" placeholder="Others " required />
              </div>
            ) : (
              ""
            )}

            <div className="inputGroup">
              <input
                type="number"
                placeholder="Main phone number *"
                value={props.phoneNumber}
                onChange={handlePhoneNumber}
                required
              />
            </div>
            <div className="inputGroup">
              <input
                type="number"
                placeholder="Altanative phone number"
                value={props.alternativePhoneNumber}
                onChange={handleAltPhoneNumber}
              />
            </div>
            <div className="inputGroup">
              <input
                type="email"
                placeholder="Email Address *"
                value={props.emailAddress}
                onChange={(e) => props.setEmailAddress(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfomation;
