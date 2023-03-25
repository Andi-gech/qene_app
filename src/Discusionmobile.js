import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useAuthHeader, useAuthUser } from "react-auth-kit";
import {
  FaPaperPlane,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import ChatProfile from "./chatProfile";
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
      <div className="Homechat">
        <div className="messagebox-mobile">
          {messages.map((message, index) => (
            <>
              {message.user !== user?.id && (
                <div className="sender">
                  <ChatProfile id={message.user} />
                  <Sendmessage
                    name={"rgb(21, 16, 31)"}
                    message={message.message}
                    date={Date(message.timestamp)}
                  />
                </div>
              )}
              {message.user === user.id && (
                <div className="reciever">
                  <Sendmessage
                    name={"#8A2BE2"}
                    message={message.message}
                    date={Date(message.timestamp)}
                  />
                  <ChatProfile id={message.user} />
                </div>
              )}
            </>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="sendmesssageButtonmobile">
          <input
            value={message}
            onChange={(e) => setmessage(e.target.value)}
            type="text"
          />
          <button onClick={handlesubmit}>
            <FaRegArrowAltCircleRight size={25} />
          </button>
        </div>
      </div>
    );
  }
}

export default DiscusiionMobile;
