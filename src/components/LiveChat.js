import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" h-[600px] w-[22rem] ml-2 p-2 border border-gray-200 rounded-lg overflow-y-hidden overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form className="w-full p-2 ml-2 border border-gray-200 rounded-lg" onSubmit={(e) =>{
        e.preventDefault();

        dispatch(
            addMessage({
                name: "Shubham Phadtare",
                message: liveMessage,
            })
        );
        setLiveMessage("");
      }}>
        <input
          className="px-2 w-[70%] border border-x-0 border-t-0 border-gray-400"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 ml-4 bg-green-200 rounded-sm">Submit</button>
      </form>
    </>
  );
};

export default LiveChat;
