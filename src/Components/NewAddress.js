const NewAddress = (props) => {
    return ( 
        <div className="form-1">
            <p>Address Infomation</p>
            <div className="NewAddress">
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.buildingType}
                        onChange={(e) => props.setBuildingType(e.target.value)}
                    >
                        <option value="-">--Type of building--</option>
                        <option value="1-bedroom-flat">1 bedroom flat</option>
                        <option value="2-bedroom-flat">2 bedroom flat</option>
                        <option value="3-bedroom-flat">3 bedroom flat</option>
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
                        <option value="-">-State</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Niger">Niger</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="text" 
                        autoComplete="off"  
                        placeholder="City" 
                        value={props.city}
                        onChange={(e) => props.setCity(e.target.value)}
                    />
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
                    <select 
                        type="dropdown"
                        value={props.propertyType}
                        onChange={(e) => props.setPropertyType(e.target.value)}
                    >
                        <option value="-">--House/Plot/Flat--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="Latitude"
                        value={props.latitude}
                        onChange={(e) => props.setLatitude(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <input 
                        type="number" 
                        autoComplete="off" 
                        placeholder="Longitude" 
                        value={props.longitude}
                        onChange={(e) => props.setLongitude(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.lengthOfResidency}
                        onChange={(e) => props.setLengthOfResidency(e.target.value)}
                    >
                        <option value="-">--Lenght of stay--</option>
                        <option value="Oyo">2 weeks</option>
                        <option value="Niger">1 Months</option>
                    </select>
                </div>
                <div className="inputGroup">
                    <button type="button" onClick={props.getLocation}>Get Longitude and Latitude</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default NewAddress;