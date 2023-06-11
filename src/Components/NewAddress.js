import { useEffect } from "react";
import { statesAndLga } from "../Context/StatesAndLga";

const NewAddress = (props) => {
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
            <p>Address Infomation * <br />(3-5)</p>
            <div className="NewAddress">
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.buildingType}
                        onChange={(e) => props.setBuildingType(e.target.value)}
                    >
                        <option value="-">--Type of building--</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Terrace">Terrace</option>
                        <option value="Duplex">Duplex</option>
                        <option value="One story semi detached Duplex">One story semi detached Duplex</option>
                        <option value="Rooms/Let in">Rooms/Let in</option>
                        <option value="Traditional houses">Traditional houses</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="text" 
                        autoComplete="off"  
                        placeholder="Street" 
                        value={props.street}
                        onChange={(e) => props.setStreet(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.state}
                        onChange={(e) => props.setState(e.target.value)}
                    >
                         { states.map((state) => (
                            <option value={state}>{state}</option>
                        )) }   
                    </select>
                </div>
                <div className="inputGroup">
                    <select
                        type="dropdown" 
                        value={props.city}
                        onChange={(e) => props.setCity(e.target.value)}
                    >
                        { lgas.map((lga) => (
                            <option value={lga}>{lga}</option>
                        )) } 
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="Zip code"
                        value={props.zipCode}
                        onChange={(e) => props.setZipCode(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="text"
                        value={props.propertyType}
                        autoComplete="off"
                        placeholder="--House/Plot/Flat--"
                        onChange={(e) => props.setPropertyType(e.target.value)}
                    />
                    
                </div>

                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="Latitude"
                        value={props.latitude}
                        onChange={(e) => props.setLatitude(e.target.value)}
                        disabled
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="Longitude" 
                        value={props.longitude}
                        onChange={(e) => props.setLongitude(e.target.value)}
                        disabled
                    />
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.lengthOfResidency}
                        onChange={(e) => props.setLengthOfResidency(e.target.value)}
                    >
                        <option value="-">--Lenght of Residency--</option>
                        <option value="2 weeks">2 weeks</option>
                        <option value="1 Months">1 Months</option>
                    </select>
                </div>
                
                
            </div>
        </div>
     );
}
 
export default NewAddress;