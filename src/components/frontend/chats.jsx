import React from "react";
import "../css/chat.css"
function Chats(props) {
  let { chat, data, weather } = props;
  let chat1 = chat.filter(s => s.id === data);
  return (
    <div className="_chatbox">
      {data === 1 ?
        (weather.map((s1, index) =>
          <React.Fragment key={index}>
            <div className="message1">
              <div className="_p">
                <div className="_name">{s1.text}</div>
                <span>{s1.time}</span>
              </div>
            </div>
            <div className="message2">
              <div className="_p">
                <div className="_name">
                  Cloudcover - {s1.cloudcover} <br />
                  Snow      - {s1.snow} <br />
                  Humidity - {s1.humidity} <br />
                  Temperature - {s1.temp} <br />
                  Pressure - {s1.pressure} <br />
                  Solarenergy - {s1.solarenergy} <br />
                </div>
                <span>{s1.time}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))
        : (chat1.map((s, index1) =>
          <React.Fragment key={index1}>
            <div className="message1">
              <div className="_p">
                <div className="_name"> {s.text}</div>
                <span>{s.time}
                </span>
              </div>
            </div>
            <div className="message2">
              <div className="_p">
                <div className="_name">{s.text}</div>
                <span>{s.time}</span>
              </div>
            </div>
          </React.Fragment>
        ))}


    </div>
  )
}
export default Chats;