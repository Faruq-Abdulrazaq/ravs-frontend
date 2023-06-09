const ContactInfomation = (props) => {
    return ( 
        <div className="form-1">
            <p>Contact Infomation</p>
            <div className="contactInformation">
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.occupation}
                        onChange={(e) => props.setOccupation(e.target.value)}
                    >
                        <option value="-">-Select Occupation-</option>
                        <option value="Player">Player</option>
                        <option value="Driver">Driver</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="Main phone number"
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
                        placeholder="Email Address"
                        value={props.emailAddress}
                        onChange={(e) => props.setEmailAddress(e.target.value)}
                    />
                </div>
            </div> 
        </div>
     );
}
 
export default ContactInfomation;