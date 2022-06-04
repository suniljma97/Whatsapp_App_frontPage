import React,{Component} from "react";
import Chats from "./chats";
import "./css/dash.css"
class DashBoard extends Component{
        state={
            form:{name:''},
            chat:[
                {id:1,name:"Ram Patidar",time:"8:30 PM",text:"okk Byy"},
               {id:2,name:"Anil Kumar Patel",time:"4:30 PM",text:"it's ok"},
               {id:3,name:"Varsha Kasaniya",time:"4:45 PM",text:"hii"},
               {id:3,name:"Varsha Kasaniya",time:"yesterday",text:"Kab tak aa rhi he"},
               {id:4,name:"Sapna Dhakad",time:"10:30 AM",text:"Write it down and send"},
               {id:5,name:"Kapil Kumar Meena",time:"3:30 AM",text:"3 din se call kr rha hoon"},
               {id:6,name:"Hari Sankar",time:"03/05/2022",text:"Update?"}
        ],
        }
    handlechange=(e)=>{
        const { currentTarget : input}=e;
        let s1={...this.state};
        s1.form[input.name]= input.value;
        this.setState(s1);
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        let s2 = {...this.state};
        let {data}= this.props;
        let time = new Date();
        let times=time.toLocaleString('en-US', { hour: 'numeric',minute:'2-digit', hour12: true })
        let d3={id:data.id,name:data.name,time:times,text:s2.form.name}
        s2.chat.push(d3);
        this.props.onTime(times,data.id,s2.form.name)
        s2.form.name=''
        this.setState(s2);
    }
    render(){
          let {name}=this.state.form;
          let {data}= this.props;
          let {chat} = this.state;
               return(
                   <div>
                       <div className="_header">
                        <div className="_imgText">
                        <div className="_userimg">
                            <img className="_cover" 
                            src={data.img} alt="" />
                         </div> 
                            <p>
                              {data.name} <br />
                              <span>online</span>
                            </p>
                        
                        </div>
                        <ul className="_nav_icons">
                            <li><ion-icon name="search-outline"></ion-icon></li> 
                            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>  
                        </ul> 
                                  
                   </div>
                    <Chats chat={chat} data={data.id}/>
                    <div className="chatbox_input">
                      <ion-icon name="happy-outline"></ion-icon>
                      <ion-icon name="attach-outline"></ion-icon>
                      <input type="search"
                             id="name"
                             name="name"
                             value={name}
                             onChange={this.handlechange}
                             placeholder="Type a message"
                            /> 
                      <ion-icon name="send" onClick={this.handelSubmit}></ion-icon>
                    </div>
                   </div>
               )
    }
}
export default DashBoard;