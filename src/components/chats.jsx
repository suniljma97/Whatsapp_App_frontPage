import React from "react";
import "./css/chat.css"
function Chats(props) {
  let { chat, data } = props;
  let chat1 = chat.filter(s => s.id === data);
  return (
    <div className="_chatbox">
      {chat1.map((s,index)=>
         <React.Fragment key={index}>
                <div className="message1">
                 <div className="_p">
                   {s.text}<br />
                   <span>{s.time}
                   </span>
                 </div>
               </div>
               <div className="message2">
                 <div className="_p">
                 {s.text}<br />
                   <span>{s.time}</span>
                 </div>
               </div>
         </React.Fragment>           
      )}
      
    </div>
  )
}
export default Chats;