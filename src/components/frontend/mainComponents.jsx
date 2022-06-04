import React, { Component } from "react";
import DashBoard from "./dashboard";
import SideBar from "./sidebar";
import "../css/style.css"
class MainComponets extends Component {
    state = {
        datas: [{ id: 1, name: "Weather Report", img:"https://cdn.pixabay.com/photo/2017/10/19/08/27/icon-2866827_960_720.jpg", mess: '' },
        { id: 2, name: "Anil Kumar Patel", img: "https://cdn.pixabay.com/photo/2016/03/27/22/21/boy-1284509_960_720.jpg", time: "4:30 PM", text: "it's ok", mess: '1' },
        { id: 3, name: "Varsha Kasaniya", img: "https://cdn.pixabay.com/photo/2014/07/31/22/50/photographer-407068_960_720.jpg", time: "yesterday", text: "Kab tak aa rhi he", mess: '2' },
        { id: 4, name: "Sapna Dhakad", img: "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg", time: "10:30 AM", text: "Write it down and send", mess: '' },
        { id: 5, name: "Kapil Kumar Meena", img: "https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg", time: "3:30 AM", text: "3 din se call kr rha hoon", mess: '1' },
        { id: 6, name: "Hari Sankar", img: "https://cdn.pixabay.com/photo/2016/03/27/19/20/indian-1283789_960_720.jpg", time: "03/05/2022", text: "Update?", mess: '1' },
        { id: 7, name: "Daniel Dans", img: "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", time: "03/05/2021", text: "", mess: '' },
        ],
        selectOne: { id: 4, name: "Sapna Dhakad", img: "https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg", time: "10:30 AM", text: "Write it down and send", mess: '' },
    }
    handleThis = (id) => {
        let s1 = { ...this.state };
        let s2 = s1.datas.find(s => s.id === id);
        s1.selectOne = s2;
        s2.mess = '';
        this.setState(s1);
    }
    handleTime = (time, id, text) => {
        let s1 = { ...this.state };
        let s2 = s1.datas.find(s => s.id === id);
        s2.time = time;
        s2.text = text;
        this.setState(s1);
    }
    render() {
        let { datas, selectOne } = this.state;
        return (
            <div className="_body">
                <div className="_container">
                    <div className="_leftSide">
                        <SideBar datas={datas} onSubmit={this.handleThis} />
                    </div>
                    <div className="_rightSide">
                        <DashBoard data={selectOne} onTime={this.handleTime} />
                    </div>
                </div>
            </div>
        )
    }
}
export default MainComponets;