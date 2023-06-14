const GetDate = ( props ) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();
    return ( 
        <div className="info">
            <span className="info-span-1">KYCT ({props.role})</span> 
            <span className="info-span-2">{day}, {date} {month} {year}</span>
            <h3>{ props.title ? props.title : ""}</h3>
        </div>
     );
}
 
export default GetDate;