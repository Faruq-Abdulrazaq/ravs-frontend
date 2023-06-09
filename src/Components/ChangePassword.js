const ChangePassword = () => {
    return ( 
        <div className="ChangePassword settingsMain">
            <div className="form-2">
                <p>Change password</p>
                <div className="settingsInformation">
                    <div className="inputGroup">
                        <input type="Passowrd" autoComplete="off" name="text" placeholder="Old password" />
                    </div>
                    <div className="inputGroup">
                        <input type="Password" autoComplete="off" name="text" placeholder="New Password" />
                    </div>
                    <div className="inputGroup">
                        <input type="password" autoComplete="off" name="text" placeholder="Confirm new password" />
                    </div>
            
                </div>
                <div className="actionBtn">
                    <button className="nextBtn">
                        <p>Save</p>
                        <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
                        </svg>
                    </button>
                </div> 
           </div>
        </div>
     );
}
 
export default ChangePassword;