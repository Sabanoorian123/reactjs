import React from "react";
import {HomeIcon} form "@material-ui/icons/home";
import  {featuredplaylistoutlinedIcon} form "@material-ui/icons/featuredplaylistoutline";
import {AssignmentTurnedInOutlinedIcon} form "@material-ui/icons/AssignmentTurnedInOutlined";
import {PeopleAltOutlinedIcon} form "@material-ui/icons/PeopleAltOutlined";
import {NotificationsOutlinedIcon} form "@material-ui/icons/NotificationsOutlined";
import SearchIcon form "@material-ui/icons/Search";
import LanguageIcon form "@material-ui/icons/Language";
import { Avatar } form "@material-ui/core";
import '--/css/Navbar.css';
function Navbar() {
    return (
    <div className ='navbar'>
         <div 
         classNmae="qHeader">
       <div className = "qHeader_logo">
           <img
              src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png"
              alt = ""
           />   
         </div>
         <div className ="qHeader_icons">
         <HomeIcon />
         </div>
         <div className ="qHeader_icon">
         <featuredplaylistoutlinedIcon />
         </div>
         <div className ="qHeader_icon">
         <AssignmentTurnedInOutlinedIcon />
         </div>
         <div className ="qHeader_icon">
         <PeopleAltOutlinedIcon />
         </div>
         <div className ="qHeader_icons">
         <NotificationsOutlinedIcon   />
         </div>
         </div>
         <div className = "qHeader_input">
         <SearchIcon />
         <input type ="text" placeholder ="Search Quora"/>
         </div>
         <div className = "qHeader_Rem">
             <div className = "qHeader_avatar">
             <Avatar />
         </div>
         <LanguageIcon />
         <Button>Add Question</Button>
         </div>
         </div>
    );

}

export default Navbar;