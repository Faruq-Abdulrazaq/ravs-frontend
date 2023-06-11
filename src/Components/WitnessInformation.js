const WitnessInformation = (props) => {
    return ( 
        <div className="form-1">
            <p>Witness Infomation <br />(4-5)</p>

            <div className="witnessInformation">                            
                <div className="inputGroup">
                    <input 
                        type="text" 
                        autoComplete="off"  
                        placeholder="First witness fullname *" 
                        value={props.firstWitnessFullName}
                        onChange={(e) => props.setFirstWitnessFullName(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="text" 
                        autoComplete="off"  
                        placeholder="Second witness fullname"
                        value={props.secondWitnessFullName}
                        onChange={(e) => props.setSecondWitnessFullName(e.target.value)}
                     />
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.firstWitnessRelationshipType}
                        onChange={(e) => props.setFirstWitnessRelationshipType(e.target.value)}
                    >
                        <option value="-">-Relationship with first witness - *</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Uncle">Uncle</option>
                        <option value="Neigbour">Neigbour</option>
                        <option value="Landload/Landlady">Landload/Landlady</option>
                        <option value="Employer">Employer</option>
                        <option value="Friend">Friend</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.secondWitnessRelationshipType}
                        onChange={(e) => props.setSecondWitnessRelationshipType(e.target.value)}
                    >
                        <option value="-">-Relationship with second witness-</option>
                        <option value="-">-Relationship with first witness-</option>
                        <option value="Father">Father</option>
                        <option value="Mother">Mother</option>
                        <option value="Brother">Brother</option>
                        <option value="Sister">Sister</option>
                        <option value="Uncle">Uncle</option>
                        <option value="Neigbour">Neigbour</option>
                        <option value="Landload/Landlady">Landload/Landlady</option>
                        <option value="Employer">Employer</option>
                        <option value="Friend">Friend</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="First witness phone number *" 
                        value={props.firstWitnessPhoneNumber}
                        onChange={(e) => props.setFirstWitnessPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off"  
                        placeholder="Second witness phone number" 
                        value={props.secondWitnessPhoneNumber}
                        onChange={(e) => props.setSecondWitnessPhoneNumber(e.target.value)}
                    />
                </div>     
            </div>
        </div>
     );
}
 
export default WitnessInformation;