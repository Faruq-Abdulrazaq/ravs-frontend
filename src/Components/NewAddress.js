import { useEffect } from "react";
import { statesAndLga } from "../Context/StatesLgasRes";

const NewAddress = (props) => {

    const lenghtOfRes = (e) => {
        if (props.lengthOfResidency.length != 2) {
            props.setLengthOfResidency(e.target.value)
        } else {
            var str = props.lengthOfResidency;
            str = str.substring(0, str.length - 1);
            props.setLengthOfResidency(str)
        }
    }

    const states = []
    for (const i in statesAndLga) {
        states.push(i)
    }
    const lgas = (statesAndLga[props.state][0].lgas)

    useEffect(() => {
        props.getLocation()
    }, [])

    return ( 
        <div className="form-1">
            <p>State of residence and address Infomation * <br />(3-5)</p>
            <div className="NewAddress">
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.buildingType}
                        onChange={(e) => props.setBuildingType(e.target.value)}
                        required
                    >
                        <option value="-">--Type of building-- *</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Terrace">Terrace</option>
                        <option value="Duplex">Duplex</option>
                        <option value="One story semi detached Duplex">One story semi detached Duplex</option>
                        <option value="Room/Let in (Face-me-face-you)">Room/Let in (Face-me-face-you)</option>
                        <option value="Traditional houses">Traditional houses</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="text" 
                         
                        placeholder="Street *" 
                        value={props.street}
                        onChange={(e) => props.setStreet(e.target.value)}
                        required
                    />
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.state}
                        required
                        onChange={(e) => props.setState(e.target.value)}
                    >
                         { states.map((state) => (
                            <option value={state} key={state}>{state}</option>
                        )) }   
                    </select>
                </div>
                <div className="inputGroup">
                    <select
                        type="dropdown" 
                        value={props.city}
                        required
                        onChange={(e) => props.setCity(e.target.value)}
                    >
                        { lgas.map((lga) => (
                            <option value={lga} key={lga}>{lga}</option>
                        )) } 
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        
                        required
                        placeholder="Zip code *"
                        value={props.zipCode}
                        onChange={(e) => props.setZipCode(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="text"
                        value={props.propertyType}
                        autoComplete="off"
                        placeholder="--House/Plot/Flat-- *"
                        onChange={(e) => props.setPropertyType(e.target.value)}
                    />
                    
                </div>

                <div className="inputGroup">
                    <input 
                        type="number" 
                        
                        placeholder="Latitude"
                        value={props.latitude}
                        onChange={(e) => props.setLatitude(e.target.value)}
                        required
                        disabled
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        
                        placeholder="Longitude" 
                        value={props.longitude}
                        onChange={(e) => props.setLongitude(e.target.value)}
                        required
                        disabled
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="text"
                        placeholder="--Lenght of Residency-- *"
                        required
                        value={props.lengthOfResidency}
                        onChange={lenghtOfRes}
                    />
                </div>
                
                
            </div>
        </div>
     );
}
 
export default NewAddress;