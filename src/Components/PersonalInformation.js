import { Nationality } from "../Context/Nationality";
import { statesAndLga } from "../Context/StatesAndLga";

const PersonalInformation = (props) => {
    const states = []
    const nationalities = []

    for (const i in Nationality) {
        nationalities.push(Nationality[i]['name'])
    }

    for (const i in statesAndLga) {
        states.push(i)
    }

    const lgas = (statesAndLga[props.sor][0].lgas)
    
    return ( 
        <div className="form-1">
            <p>Personal Infomation * <br /> (1-5)</p>
            <div className="personalInformation">
                <div className="inputGroup">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Surname"
                        value={props.surname}
                        onChange={(e) => props.setSurname(e.target.value)}
                        required
                     />
                </div>
                <div className="inputGroup">
                    <input 
                        type="text" 
                        
                        name="text" 
                        placeholder="Other names"
                        value={props.fullname}
                        onChange={(e) => props.setFullname(e.target.value)}
                        required
                     />
                </div>
                <div className="inputGroup">
                    <input 
                        type="date" 
                        
                        name="text"
                        placeholder="Date of Birth"
                        value={props.dob}
                        onChange={(e) => props.setdob(e.target.value)}
                        required
                    />
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.sex}
                        onChange={(e) => props.setSex(e.target.value)}
                        required
                    >
                        <option value="-">-Sex-</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.Nationality}
                        onChange={(e) => props.setNationality(e.target.value)}
                        required
                    >
                     { nationalities.map((nationality) => (
                        <option value={nationality} key={nationality}>{nationality}</option>
                     )) }   
                    </select>
                </div>

                 { props.Nationality === "Nigeria"
                  ?
                    <div className="inputGroup">
                        <select 
                            type="dropdown"
                            value={props.sor}
                            onChange={(e) => props.setSor(e.target.value)}
                            required
                        >
                        { states.map((state) => (
                            <option value={state} key={state}>{state}</option>
                        )) }   
                        </select>
                    </div>
                  :
                  ""
                }  
                {
                    props.sor !== "State of origin" || props.sor === "" 
                    ?
                    <div className="inputGroup">
                        <select 
                            type="dropdown"
                            value={props.lga}
                            onChange={(e) => props.setLga(e.target.value)}
                            required
                        >
                        { lgas.map((lga) => (
                            <option value={lga} key={lga}>{lga}</option>
                        )) } 
                        </select>
                    </div>
                    :
                    ""
                } 
                

                <div className="inputGroup">
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Home Area"
                        value={props.homeTown}
                        onChange={(e) => props.setHomeTown(e.target.value)}
                        required
                    />
                </div>
            </div>

        </div>
     );
}
 
export default PersonalInformation;