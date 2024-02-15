import { useState, useEffect, useRef } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:4000/';

const ClientSocket = ({ username, room,setUserCode,userCode }) => {
  console.log(userCode);
  const socketRef = useRef();
  const [users, setUsers] = useState([]);
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
      setUsers(users);
    });
    socketRef.current.on('messagecode', (data) => {
      console.log(data);
        setUserCode(data);
      })
    return () => {
      socketRef.current.emit('disconnected');
    };
  }, [username, room,setUserCode]);

    const saveCode = Usercode =>{
      socketRef.current.emit('messagecode', {username, room,userCode})  
    }
    

  const sendMessage = message => {
    socketRef.current.emit('sendMessage', {username, room,message}, () => {});
  };

  return { users, messages, sendMessage, error,saveCode };
};

export default ClientSocket;