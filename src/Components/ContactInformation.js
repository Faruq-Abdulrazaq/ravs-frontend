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
        "Other",
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
        "Transportation/ Driving & Logistics"
    ]
    return ( 
        <div className="form-1">
            <p>Contact Infomation <br /> (2-5)</p>
            <div className="contactInformation">
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.occupation}
                        onChange={(e) => props.setOccupation(e.target.value)}
                    >
                        {Occupations.map((occupation) => (
                            <option value={occupation}>{occupation}</option>
                        ))}
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="Main phone number *"
                        value={props.phoneNumber}
                        onChange={(e) => props.setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off"  
                        placeholder="Altanative phone number"
                        value={props.alternativePhoneNumber}
                        onChange={(e) => props.setAlternativePhoneNumber(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="email" 
                        autoComplete="off" 
                        placeholder="Email Address *"
                        value={props.emailAddress}
                        onChange={(e) => props.setEmailAddress(e.target.value)}
                    />
                </div>
            </div> 
        </div>
     );
}
 
export default ContactInfomation;