import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import {
  FaPaperPlane,
  FaPlane,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import ChatProfile from "./chatProfile";
import DarkModeContext from "./DarkMODE";
import Loadingcomponent from "./LoadingComponent";
import Sendmessage from "./Message";
import useMessagehook from "./useMessage";
import useProfilehook from "./useProfiledatahook";
import useUserhook from "./useUser";

function DiscusiionMobile() {
  const { id } = useParams();
  const authHeader = useAuthHeader();

  const messagesEndRef = useRef();

  const auth = useAuthUser();
  const { isLoading, data: user } = useProfilehook("me");

  const { data: profile } = useUserhook("me");

  const [message, setmessage] = useState("");
  const [messages, setData] = useState(null);
  const [isloading, setloading] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      axios.defaults.headers.common["Authorization"] = authHeader();
      try {
        const response = await axios.get(
          `https://andigech.pythonanywhere.com/room/${id}/message/`
        );
        setData(response.data);
      } catch (error) {
        // Handle error
      }

      setTimeout(fetchData, 1000); // Wait 5 seconds before making the next request
    };

    fetchData();
  }, []);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const sendData = async (jasons) => {
    axios.defaults.headers.common["Authorization"] = authHeader();

    const res = await axios
      .post(`https://andigech.pythonanywhere.com/room/${id}/message/`, jasons)
      .then((res) => {
        console.log("message sent");
      })
      .catch((error) => console.log("there is error"));
  };

  function handlesubmit(event) {
    event.preventDefault();
    sendData({
      message: message,
    });

    setmessage("");
  }

  useEffect(() => {
    if (messagesEndRef) {
      messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  if (user && profile && messages) {
    return (
      <div
        className="Mycourse-mobile"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <div className="inputpages">
          {messages.map((message, index) => (
            <>
              {message.user !== user?.id && (
                <div className="sender">
                  <span id="profilepics">
                    <ChatProfile id={message.user} />
                  </span>
                  <Sendmessage
                    left={"rgba(35,67,106,0.9500175070028011)"}
                    right={"rgba(0,0,0,1)"}
                    message={message.message}
                    date={Date(message.timestamp)}
                    sender={true}
                  />
                </div>
              )}
              {message.user === user.id && (
                <div className="reciever">
                  <Sendmessage
                    left={"rgba(53,117,224,0.9500175070028011)"}
                    right={"rgba(215,10,215,0.9528186274509804)"}
                    name={"#8A2BE2"}
                    sender={false}
                    message={message.message}
                    date={message.timestamp}
                  />
                </div>
              )}
            </>
          ))}
          <p ref={messagesEndRef} />
        </div>

        <div className="sendmesssageMobile">
          <input
            value={message}
            placeholder="Message...."
            onChange={(e) => setmessage(e.target.value)}
            type="text"
          />
          <button onClick={handlesubmit}>
            <FaPaperPlane size={25} color="white" />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="MobilGradeReport"
        style={{
          background: isDarkMode ? "black" : "white",
          color: isDarkMode ? "white" : "black",
        }}
      >
        <Loadingcomponent />
      </div>
    );
  }
}

export default DiscusiionMobile;
