import "--/css/post.css"
import { Avatar } from "@material-ui/core";
import React from "react";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBuddleOutlineOutlinedIcon from "@material-ui/icons/ChatBuddleOutlineOutlined";
import {MoreHorizOutlined,ShareOutlined}from "@material-ui/icons";

function Post(){
    return(
    <div className ="post">
    <div className ="post_info">
    <Avatar />
    <h5>Username</h5>
    <small> Timstamp</small>
</div>
<div className ="post_body">
    <div className ="post_question">
        <p>Question</p>
        <button className ="post_btnanswer">Answer</button>
    </div>
    <div className ="post_answer">
        <p></p>
    </div>
    <img src ="https://imgd.aeplcdn.com/1200x900/n/cw/ec/44419/mg-zs-ev-exterior-0.jpeg"
    alt="" />
   </div>
   <div className = "post_footer">
       <div className ="post+footerAction">
           <ArrowUpwardOutlinedIcon />
           <ArrowDownwardOutlinedIcon /> 
       </div>
       <RepeatOutlinedIcon />
       <ChatBuddleOutlineOutlinedIcon />
       <div className ="post_footerLeft">
           <ShareOutlined />
           <MoreHorizOutlined />
                  </div>
   </div>
 </div>
    );
}
export default Post;