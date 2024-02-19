import { useState } from "react";
import React from 'react';

import ClientSocket from "./clientsocket";
const Chat = (props) => {
  const [message, setMessage] = useState('');
  const { users, messages, sendMessage, saveCode } = ClientSocket(props);
  const onSubmitHandler = event => {
    event.preventDefault();
    if (message) {
      sendMessage(message);
      saveCode(props.UserCode);
    }
    setMessage('');
  };
  const renderActiveUsers = () => {
    return users.map(user => {
      return (
        <p className="p-2 m-1 text-blue-300" key={user.id} >
          <i className="fa fa-circle"></i> {user.name}
        </p>
      );
    });
  };
  return (
    <div className="container-fluid border-t d-flex h-[45vh]">
      <div className="col-lg-6 flex flex-col">
        <h6 className="m-2 text-lg border-tv py-2">Messages/Commits</h6>
        <div className="flex border border-white h-[33vh] flex-col">
          {messages.map((ele) => { return <p className="h-[30px]">{ele.user}:{ele.text}</p> })}
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
      {/* <div className="col-lg-6 border-left ml-2">
        {renderActiveUsers()}
      </div> */}
    </div>
  )
};
export default Chat;