import './style.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CoffeeLogo from '../../atoms/CoffeeLogo'
import {BtnLg, CustomButton} from '../../atoms/'

const Navbar = ()=>{
    const [sementaraBuatTesLoginDoang, setSementara] = useState(false)
    return(
        <div className="navbarReusable rubikFont">
            {/* NAVBAR - DESKTOP */}
            <div className="navbarDesktop">
                <CoffeeLogo logoWidth="11vw"/>
                <div className="displayRow navFourBtn">
                    <Link className="navBtn" onClick={ () => {localStorage.setItem("navbarState", "Home"); window.location ="/Home"} } style={localStorage.getItem("navbarState") === "Home" || localStorage.getItem("navbarState") === null ? {color: "#6A4029", fontWeight: "bold"} : null}>Home</Link>
                    <Link className="navBtn" onClick={ () => {localStorage.setItem("navbarState", "Product"); window.location ="Products"} } style={localStorage.getItem("navbarState") === "Product" ? {color: "#6A4029", fontWeight: "bold"} : null}>Product</Link>
                    <Link className="navBtn" onClick={ () => {localStorage.setItem("navbarState", "Cart")} } style={localStorage.getItem("navbarState") === "Cart" ? {color: "#6A4029", fontWeight: "bold"} : null}>Your Cart</Link>
                    <Link className="navBtn" onClick={ () => {localStorage.setItem("navbarState", "History")} } style={localStorage.getItem("navbarState") === "History" ? {color: "#6A4029", fontWeight: "bold"} : null}>History</Link>
                </div>
                {sementaraBuatTesLoginDoang === true ?
                <div className="displayRow" style={{alignItems: "center"}}>
                    <Link className="navBtn">Login</Link>
                    <BtnLg value='Sign Up' color='btn-orange' rounded='rounded-pill'/>
                </div>
                :
                <div className="displayRow" style={{alignItems: "center"}}>
                    <Link className="hoverThis"><img src="https://user-images.githubusercontent.com/77045083/113756261-621f1180-973b-11eb-94b0-e6ee1be8b9e4.png" style={{height: "1vw"}}/></Link>
                    <Link className="hoverThis" style={{margin: "0 3vw"}}><img src="https://user-images.githubusercontent.com/77045083/113756264-62b7a800-973b-11eb-82f5-d57d95e6e664.png" style={{height: "1.5vw"}}/></Link>
                    <div className="hideFirst col-md-1 dropdown">
                        <img className="dropdown-toggle hoverThis imgNavbar" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{borderRadius:"50%"}}/>
                        <div className="hideFirst dropdown-menu dropdownUser" aria-labelledby="dropdownMenuButton">
                        <div className="userDropdownWrapper">
                            <div className="userDropdownArea">
                                <img className="hoverThis userProfileImage" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                                <div className="displayColumn userProfileNameAndTitle">
                                    <p className="mulishFont userProfileName">Username</p>
                                    <p className="mulishFont userProfileTitle">Member</p>
                                </div>
                            </div>
                            { sementaraBuatTesLoginDoang === false ? 
                            <CustomButton bgClr="#FFBA33" txClr="black" brRad="0.5vw" btnPdg="0.5vw 4.1vw" ftSize="0.8vw" ftWg="600"value="Add new menu"/>
                            : null }
                            <div className="userBtnArea">
                                <CustomButton bgClr="#6A4029" txClr="white" brRad="0.5vw" btnPdg="0.5vw 1.9vw" ftSize="0.8vw" ftWg="600" value="Setting"/>
                                <CustomButton bgClr="indianred" txClr="white" brRad="0.5vw" btnPdg="0.5vw 1.9vw" ftSize="0.8vw" ftWg="600" value="Logout"/>
                            </div>
                        </div> 
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar