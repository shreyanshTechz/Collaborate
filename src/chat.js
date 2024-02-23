import { useState } from "react";
import React from 'react';
import axios from "axios";
import ClientSocket from "./clientsocket";

const ENDPOINT = 'https://codeserver-ckyr.onrender.com/';

// const ENDPOINT = 'http://localhost:4000/';

const Chat = (props) => {
  const [message, setMessage] = useState('');
  const { users, messages, sendMessage, saveCode } = ClientSocket(props);
  const handleCodeChange = (event) =>{
    event.preventDefault();
    axios.post(`${ENDPOINT}getcode`,{
      id:event.target.id
    }).then((res)=>{
      props.setUserCode(res.data.code);
    });
  }


  const onSubmitHandler = event => {
    event.preventDefault();
    if (message) {
      axios.post(`${ENDPOINT}commitcode`,{
        code:props.userCode,
        user:props.username,
        room:props.room,
      }).then((res)=>{
        console.log(res.data);
        sendMessage(`Commit : ${message}`,true,res.data);
      });
      saveCode(props.UserCode);
    }
    setMessage('');
  };
  return (
    <div className="container-fluid border-t d-flex h-[45vh]">
      <div className="col-lg-6 flex flex-col">
        <h6 className="m-2 text-lg border-tv py-2">Messages/Commits</h6>
        <div className="flex border text-nowrap overflow-scroll border-white h-[33vh] flex-col" style={{ msOverflowStyle: "none",scrollbarWidth: "none"}}>
          {messages.map((ele) => { return <div className=" flex flex-row w-full h-[30px] mt-2">
          <div className="mr-1">{ele.time}</div>
            <div className="mr-1 text-blue-300">
            {ele.user}:
            </div>
            <div id={ele.id} onClick={handleCodeChange} className={ele.isCommit?" text-yellow-600 cursor-pointer":" text-green-500"} >
            {ele.text}
            </div>
            </div>
         })}
        </div>
    
        <div className="div align-bottom flex">
          <input
            className="text-black px-2 py-1  w-[90%] rounded-sm "
            autoComplete="off"
            value={message}
            onChange={e => setMessage(e.target.value)}
            type="text"
            name="message"
          />
          <button type="submit"
            className="px-2 py-1 rounded bg-blue-400"
            onClick={onSubmitHandler}> Send </button>
        </div>

      </div>
    </div>
  )
};
export default Chat;