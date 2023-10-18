import GetDate from "../Components/Getdate";

const WitnessInformation = (props) => {
  const handleWitness1 = (e) => {
    if (props.firstWitnessPhoneNumber.length !== 11) {
      props.setFirstWitnessPhoneNumber(e.target.value);
    } else {
      var str = props.firstWitnessPhoneNumber;
      str = str.substring(0, str.length - 1);
      props.setFirstWitnessPhoneNumber(str);
    }
  };

  const handleWitness2 = (e) => {
    if (props.secondWitnessPhoneNumber.length !== 11) {
      props.setSecondWitnessPhoneNumber(e.target.value);
    } else {
      var str = props.secondWitnessPhoneNumber;
      str = str.substring(0, str.length - 1);
      props.setSecondWitnessPhoneNumber(str);
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
            Witness Infomation <br />
            (4-5)
          </p>

          <div className="witnessInformation">
            <div className="inputGroup">
              <input
                type="text"
                placeholder="First witness fullname *"
                required
                value={props.firstWitnessFullName}
                onChange={(e) => props.setFirstWitnessFullName(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Second witness fullname"
                required
                value={props.secondWitnessFullName}
                onChange={(e) => props.setSecondWitnessFullName(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <select
                type="dropdown"
                required
                value={props.firstWitnessRelationshipType}
                onChange={(e) =>
                  props.setFirstWitnessRelationshipType(e.target.value)
                }
              >
                <option value="-">-Relationship with first witness - *</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Uncle">Uncle</option>
                <option value="Neigbour">Neigbour</option>
                <option value="Landlord/Landlady">Landlord/Landlady</option>
                <option value="Employer">Employer</option>
                <option value="Friend">Friend</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="inputGroup">
              <select
                required
                type="dropdown"
                value={props.secondWitnessRelationshipType}
                onChange={(e) =>
                  props.setSecondWitnessRelationshipType(e.target.value)
                }
              >
                <option value="-">-Relationship with second witness-</option>
                <option value="-">-Relationship with first witness-</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Uncle">Uncle</option>
                <option value="Neigbour">Neigbour</option>
                <option value="Landlord/Landlady">Landlord/Landlady</option>
                <option value="Employer">Employer</option>
                <option value="Friend">Friend</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="inputGroup">
              <input
                type="number"
                required
                placeholder="First witness phone number *"
                value={props.firstWitnessPhoneNumber}
                onChange={handleWitness1}
              />
            </div>
            <div className="inputGroup">
              <input
                type="number"
                required
                placeholder="Second witness phone number"
                value={props.secondWitnessPhoneNumber}
                onChange={handleWitness2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WitnessInformation;
