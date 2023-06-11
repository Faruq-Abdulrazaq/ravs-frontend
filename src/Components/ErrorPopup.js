const ErrorPopup = (props) => {
    return (props.trigger) ? ( 
        <div className="commentpopup" onClick={() => props.setTrigger(false)}> 
            <div className="commentpopup-inner">
                <button type="button" className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                <div className="popupfinc">
                    <p>{props.errorMessage}</p>
                </div>
            </div>
        </div>
     ): "" ;
}
 
export default ErrorPopup;