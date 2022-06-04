import React, { Component } from "react";
import "./css/sidebar.css"
class SideBar extends Component {
    ClickName = (id) => {
        this.props.onSubmit(id);
    }
    render() {
        let { datas } = this.props;
        return (
            <div>
                <div className="_header">
                    <div className="_userimg">
                        <img className="_cover"
                            src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/344/external-user-shopping-mall-xnimrodx-blue-xnimrodx.png" alt="" />
                    </div>
                    <ul className="_nav_icons">
                        <li><ion-icon name="scan-circle-outline"></ion-icon></li>
                        <li><ion-icon name="chatbox"></ion-icon></li>
                        <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                    </ul>
                </div>
                <div className="_search_chat">
                    <div>
                        <input type="text"
                            placeholder="Search or start new chat"
                        />
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                </div>
                {datas.map((s, index) =>
                    <div className="_chatlist" onClick={() => this.ClickName(s.id)} key={s.id}>
                        <div tabindex={index + 1} className="_block">
                            <div className="_imgbx">
                                <img src={s.img}
                                    className="_cover" alt="" />

                            </div>
                            {s.mess === ""? (
                                 <div className="_details">
                                 <div className="_listHead">
                                     <span>{s.name}</span>
                                     <p className="_time">{s.time}</p>
                                 </div>
                                 <div className="_message">
                                     <p>{s.text}</p>
                                 </div>
                             </div>
                            ) :(
                                <div className="_details unread">
                                <div className="_listHead">
                                    <span>{s.name}</span>
                                    <p className="_time">{s.time}</p>
                                </div>
                                <div className="_message">
                                    <p>{s.text}</p>
                                    <b>{s.mess}</b>

                                </div>

                            </div>
                            )}
                           

                        </div>
                    </div>
                )}

            </div>
        )
    }
}
export default SideBar;