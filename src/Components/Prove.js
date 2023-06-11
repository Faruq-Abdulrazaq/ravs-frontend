const Prove = (props) => {
    return ( 
        <div className="form-1">
            <p>Documentaion (5-5)</p>
            <br />
            <div className="prove">
                <div className="container">
                    <label htmlFor="arquivo">Upload Valid Identification * :</label>
                    <input 
                        accept=".jpg, .jpeg, .png, .gif, .pdf" 
                        className="inpdddut" 
                        name="arquivo" 
                        id="arquivo" 
                        type="file"
                        files={props.verification}
                        onChange={(e) => props.setVerification(e.target.files[0])} 
                    />
                </div>
                <div className="container">
                    <label htmlFor="arquivo">Upload Proof of Residence * :</label>
                    <input 
                        accept=".jpg, .jpeg, .png, .gif, .pdf" 
                        className="inpdddut" 
                        name="arquivo" 
                        id="arquivo" 
                        type="file" 
                        files={props.proveOfResidency}
                        onChange={(e) => props.setProveOfResidency(e.target.files[0])}
                    />
                </div>
                <div className="container">
                    <label htmlFor="arquivo">Upload Photo Image * :</label>
                    <input 
                        accept=".jpg, .jpeg, .png, .gif, .pdf" 
                        className="inpdddut" 
                        name="arquivo" 
                        id="arquivo" 
                        type="file" 
                        files={props.photoImage}
                        onChange={(e) => props.setPhotoImage(e.target.files[0])}
                    />
                </div>
            </div>

        </div>
     );
}
 
export default Prove;