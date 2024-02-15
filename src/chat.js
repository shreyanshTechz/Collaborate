import { useState } from "react";
import ClientSocket from "./clientsocket";
const Chat = (props) => {
    const [message, setMessage] = useState('');
    const { users, messages, sendMessage,saveCode} = ClientSocket(props);
    const onSubmitHandler = event => {
      event.preventDefault();
      if (message){
         sendMessage(message);
         saveCode(props.UserCode);
      }
      setMessage('');
    }; 
    const renderActiveUsers = () => {
      return users.map(user => {
        return (
          <p key={user.id} >
            <i className="fa fa-circle"></i> {user.name}
          </p>
        );
      });
    };
  return (
    <div className="container-fluid d-flex">
     <div className="col-lg-6">
       <ul>
         <h6>Messages</h6>
         {messages.map((ele)=>{return <p>{ele.user}:{ele.text}</p>})}
       </ul>
         <input
         autoComplete="off"
         value={message}
         onChange={e => setMessage(e.target.value)}
         type="text"
         name="message"
        />
         <button type="submit" onClick={onSubmitHandler}> Send </button>
    </div>
  <div className="col-lg-6 border-left ml-2">
       {renderActiveUsers()}
     </div>
   </div>
  )};
  export default Chat;