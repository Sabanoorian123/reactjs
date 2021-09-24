import React from "react";
import '--/css/QuoraBox.css';

function QuoraBox() {
    return(
        <div className = "quoraBox">
         <div className = "quoraBox_info">
             <Avatar />
             <h5> username</h5>
         </div>
         <div className ="quoraBox_quora">
             <p> whats is your question</p>
         </div>
        </div>
    );
}
export default QuoraBox;