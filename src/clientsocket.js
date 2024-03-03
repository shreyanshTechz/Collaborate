import { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'https://codeserver-ckyr.onrender.com/';

// const ENDPOINT = 'http://localhost:4000/';

const ClientSocket = ({ username, room,setUserCode,userCode,users,setusers }) => {
  const socketRef = useRef();
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    socketRef.current = socketIOClient(ENDPOINT);
    socketRef.current.emit('join', { username, room }, error => {
      if (error) {
        setError(error);
      }
    });
    socketRef.current.on('message', message => {
      console.log(message);
      setMessages(messages => [...messages, message]);
    });
    

    socketRef.current.on('roomData', ({ users }) => {
      setusers(users);
    });
    socketRef.current.on('messagecode', (data) => {
        // setUserCode(data);
        console.log(username,data.username);
        if(username !== data.username)
        if (confirm(`New Changes were made by ${data.username}. Do you want to change the code to latest changes?`)) {
          setUserCode(data.userCode);
        }


      })
  }, [username,setUserCode]);

    const saveCode = Usercode =>{
      socketRef.current.emit('messagecode', {username, room,userCode})  
    }
    

  const sendMessage = (message,isCommit,id) => {
    console.log(isCommit);
    socketRef.current.emit('sendMessage', {username, room,message,isCommit,id}, () => {});
  };

  return { users, messages, sendMessage, error,saveCode };
};

export default ClientSocket;