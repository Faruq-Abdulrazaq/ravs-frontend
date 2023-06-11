import { statesAndLga } from "../Context/StatesAndLga";
const PersonalInformation = (props) => {
    const states = []
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
                        autoComplete="off" 
                        name="text" 
                        placeholder="Surname"
                        value={props.surname}
                        onChange={(e) => props.setSurname(e.target.value)}
                     />
                </div>
                <div className="inputGroup">
                    <input 
                        type="text" 
                        autoComplete="off" 
                        name="text" 
                        placeholder="Other names"
                        value={props.fullname}
                        onChange={(e) => props.setFullname(e.target.value)}
                     />
                </div>
                <div className="inputGroup">
                    <input 
                        type="date" 
                        autoComplete="off" 
                        name="text"
                        placeholder="Date of Birth"
                        value={props.dob}
                        onChange={(e) => props.setdob(e.target.value)}
                    />
                </div>
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.sex}
                        onChange={(e) => props.setSex(e.target.value)}
                    >
                        <option value="-">-Sex-</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.sor}
                        onChange={(e) => props.setSor(e.target.value)}
                    >
                     { states.map((state) => (
                        <option value={state}>{state}</option>
                     )) }   
                    </select>
                </div>
               
                <div className="inputGroup">
                    <select 
                        type="dropdown"
                        value={props.lga}
                        onChange={(e) => props.setLga(e.target.value)}
                    >
                    { lgas.map((lga) => (
                        <option value={lga}>{lga}</option>
                     )) } 
                    </select>
                </div>
                <div className="inputGroup">
                    <input 
                        type="text" 
                        autoComplete="off" 
                        name="text" 
                        placeholder="Home Area"
                        value={props.homeTown}
                        onChange={(e) => props.setHomeTown(e.target.value)}
                    />
                </div>
            </div>

        </div>
     );
}
 
export default PersonalInformation;