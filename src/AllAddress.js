import React  from 'react';
import axios from 'axios';
import SideNav from "./Components/SideNav";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./Context/AuthContext";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useReactToPrint } from 'react-to-print';


const AllAddress = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();
    const navigate = useNavigate()
    const { user } = UserAuth()
    const [search, setSearch] = useState('')
    const [searchFilter, setSearchFilter] = useState('')
    const [userSurname, setUserSurname] = useState("")
    const [othername, setOthername] = useState("")
    const [email, setEmail] = useState("")
    const [profileUrl, setProfileUrl] = useState("")
    const [tables, setTables] = useState([])
    const notVerified = "Not verified"
    const verified = "Verified"
    const componentRef = useRef()
    
    useEffect(() => {
        if (user) {
            const local = JSON.parse(localStorage.getItem('RavsAuthUser'));
            setEmail(local.email)
            setUserSurname(local.surname)
            setOthername(local.othername)
            setProfileUrl(local.imgUrl)
            handleGet();
        } else {
            navigate('/')
        }
    }, [0])

    const handleGet = async () => {
        const url = "https://fine-cyan-gharial-sari.cyclic.app/getAll";
        try {
            const res = await axios.get(url, {
                headers: {},
            });
            const data = res.data.data;
            setTables(data)
        } catch (err) {
            console.log(err);
        }
    }

    const generatePdf = useReactToPrint({
        content: ()=>componentRef.current,
        documentTitle: "Address documentation"
    })

    return ( 
        <div className="dashboardPage">
             <SideNav 
                userSurname={userSurname}
                othername={othername}
                email={email}
                profileUrl={profileUrl}
            />
            <section className="mainnav">
                 <header>
                    <div className="info-address">
                        <div className="infodetails">
                            <span className="info-span-1">All Address</span>
                            <span className="info-span-2">{day}, {date} {month} {year}</span>
                        </div>
                        <form>
                            <select 
                                name="" 
                                id=""
                                value={searchFilter}
                                onChange={(e) => setSearchFilter(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="fromDb.registeredData.surname">Surname</option>
                                <option value="fromDb.registeredData.fullName">Other name</option>
                                <option value="fromDb.registeredData.dateOfBirth">Date of Birth</option>
                                <option value="fromDb.registeredData.sex">Sex</option>
                                <option value="fromDb.registeredData.stateOfOrigin">State of Origin</option>
                                <option value="fromDb.registeredData.localGovernmentArea">Local Government Area</option>
                                <option value="fromDb.registeredData.homeTown">Home Town</option>
                                <option value="fromDb.registeredData.occupation">Occupation</option>
                                <option value="fromDb.registeredData.phoneNumber">Phone Number</option>
                                <option value="fromDb.registeredData.alternativePhoneNumber">Alternate Phone Number</option>
                                <option value="fromDb.registeredData.emailAddress">E-Mail Address</option>
                                <option value="fromDb.registeredData.buildingType">Building Type</option>
                                <option value="fromDb.registeredData.propertyType">House/Plot/Flat</option>
                                <option value="fromDb.registeredData.street">Street</option>
                                <option value="fromDb.registeredData.state">State</option>
                                <option value="fromDb.registeredData.city">City</option>
                                <option value="fromDb.registeredData.zipCode">Zip Code</option>
                                <option value="fromDb.registeredData.longitude">Logitude</option>
                                <option value="fromDb.registeredData.latitude">Latitude</option>
                                <option value="fromDb.registeredData.lengthOfResidency">Duration of Stay</option>
                                <option value="fromDb.registeredData.firstWitnessFullName">First Witness Full Name</option>
                                <option value="fromDb.registeredData.firstWitnessRelationshipType">First Witness Relationship</option>
                                <option value="fromDb.registeredData.firstWitnessPhoneNumber">First Witness Phone Number</option>
                                <option value="fromDb.registeredData.secondWitnessFullName">Second Witness Full Name</option>
                                <option value="fromDb.registeredData.secondWitnessRelationshipType">Second Witness Relationship</option>
                                <option value="fromDb.registeredData.secondWitnessPhoneNumber">Second Witness Phone Number</option>
                                <option value="fromDb.verified">Verified</option>
                            </select>
                            <div className="group">
                                <svg className="icon-search" aria-hidden="true" viewBox="0 0 24 24">
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                </svg>
                                <input 
                                    placeholder="Search" 
                                    type="search" 
                                    className="input-search" 
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <ReactHTMLTableToExcel
                                    id="test-table-xls-button"
                                    className="download-table-xls-button"
                                    table="table-to-xls"
                                    filename="tablexls"
                                    sheet="tablexls"
                                    buttonText="Download as XLS"
                                />
                            <button type='button' onClick={generatePdf} className='download-table-xls-button'>Print</button>
                        </form>
                    </div>
                </header>
                <h1 className="h1-address">All address</h1>

                <section className="section-address">
                
                    <table cellPadding="0" cellSpacing="0" border="0" id="table-to-xls"  ref={componentRef}>
                        <thead >
                            <tr className="tbl-header">
                                <th>Surname</th>
                                <th>Other Names</th>
                                <th>Date of Birth</th>
                                <th>Sex</th>
                                <th>State of Origin</th>
                                <th>Local Government Area</th>
                                <th>Home Town</th>
                                <th>Occupation</th>
                                <th>Phone Number</th>
                                <th>Alternate Phone Number</th>
                                <th>E-Mail Address</th>
                                <th>Building Type</th>
                                <th>House/Plot/Flat</th>
                                <th>Street</th>
                                <th>State</th>
                                <th>City</th>
                                <th>Zip Code</th>
                                <th>Logitude</th>
                                <th>Latitude</th>
                                <th>Duration of Stay</th>
                                <th>First Witness Full Name</th>
                                <th>First Witness Relationship</th>
                                <th>First Witness Phone Number</th>
                                <th>Second Witness Full Name</th>
                                <th>Second Witness Relationship</th>
                                <th>Second Witness Phone Number</th>
                                <th>Valid Identification</th>
                                <th>Proof of Residence</th>
                                <th>Proof of Residence</th>
                                <th>Verified</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {tables.filter((table) => {
                            return search.toLowerCase() === ''
                            ? table
                            : table.fromDb.registeredData.surname.toLowerCase().includes(search);
                        }).map(table => (
                            <tbody key={table._id}>
                                <tr>
                                    <td>{table.fromDb.registeredData.surname}</td>
                                    <td>{table.fromDb.registeredData.othernames}</td>
                                    <td>12:34:4</td>
                                    <td>{table.fromDb.registeredData.sex}</td>
                                    <td>{table.fromDb.registeredData.stateOfOrigin}</td>
                                    <td>{table.fromDb.registeredData.localGovernmentArea}</td>
                                    <td>{table.fromDb.registeredData.homeTown}</td>
                                    <td>{table.fromDb.registeredData.occupation}</td>
                                    <td>{table.fromDb.registeredData.phoneNumber}</td>
                                    <td>{table.fromDb.registeredData.alternativePhoneNumber}</td>
                                    <td>{table.fromDb.registeredData.emailAddress}</td>
                                    <td>{table.fromDb.registeredData.buildingType}</td>
                                    <td>{table.fromDb.registeredData.propertyType}</td>
                                    <td>{table.fromDb.registeredData.street}</td>
                                    <td>{table.fromDb.registeredData.state}</td>
                                    <td>{table.fromDb.registeredData.city}</td>
                                    <td>{table.fromDb.registeredData.zipCode}</td>
                                    <td>{table.fromDb.registeredData.longitude}</td>
                                    <td>{table.fromDb.registeredData.latitude}</td>
                                    <td>{table.fromDb.registeredData.lengthOfResidency}</td>
                                    <td>{table.fromDb.registeredData.firstWitnessFullName}</td>
                                    <td>{table.fromDb.registeredData.firstWitnessRelationshipType}</td>
                                    <td>{table.fromDb.registeredData.firstWitnessPhoneNumber}</td>
                                    <td>{table.fromDb.registeredData.secondWitnessFullName}</td>
                                    <td>{table.fromDb.registeredData.secondWitnessRelationshipType}</td>
                                    <td>{table.fromDb.registeredData.secondWitnessPhoneNumber}</td>
                                    <td>{table.fromDb.registeredData.verification}</td>
                                    <td>{table.fromDb.registeredData.proveOfResidency}</td>
                                    <td>{table.fromDb.registeredData.photoImage}</td>
                                    <td>{table.fromDb.verified ? verified : notVerified}</td>
                                    <td>Go</td>
                                </tr>
                            </tbody>
                        ))}
                        
                    </table>

                </section>
            </section>
        </div>
     );
}
 
export default AllAddress;