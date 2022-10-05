import React,{useState, useEffect} from "react"
import './style.css';
import io from 'socket.io-client';
import { useLocation } from "react-router-dom";
import Logo from "../asset/logo.png"

var CryptoJS = require("crypto-js");

function Chat() {
  const location = useLocation()
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([]);
  const [last, setLast] = useState();
  const [socket, setSocket] = useState(null);

  const name = new URLSearchParams(location?.search).get('u')
  const room = new URLSearchParams(location?.search).get('r')

  useEffect(()=>{
    if(socket != null){
        socket.emit('join',{name,room})
    }
  },[socket])

  // Connect Socket
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(message), 'secret key 123').toString();

  // Decrypt
  const decrypt = (data) =>{
    var bytes  = CryptoJS.AES.decrypt(data? data : ciphertext, 'secret key 123');
    var decryptedData = JSON?.parse(bytes.toString(CryptoJS.enc.Utf8))
    if(data){
    return decryptedData
    }
  }

  // On Message Send
  const onSend = () =>{
    const data = {
      name: name,
      message: ciphertext,
      room:room
    }
    socket.emit('message', data);
    setMessages((prev)=>[data, ...prev])
    setMessage('')
  }

  // Message Listern
  useEffect(() => {
    const messageListener = (data) => {
      console.log(data);
      setLast(data)
      setMessages((prev)=>[data, ...prev])
    };
    socket?.on('message', messageListener);
  }, [socket]);

  return (
    <div className="App">
      <div className={"App_Middle"}>
        <div className="App_Middle_Profile_Con">
          <img src={Logo}/>
          <div style={{flex:1}}/>
          <h3>{name} ({room})</h3>
        </div>
        <div className={"App_Middle_Message_Con"}>
          {messages?.map((item, index)=>{
            return(
              <div key={index} className={item?.name == name? "Chat_Bubble" : "Chat_Bubble1"}>
              {decrypt(item?.message)}
              </div>
            )
          })}
        </div>
        <div className={"App_Middle_Input_Con"}>
          <form onSubmit={(e)=>{
            e.preventDefault();
            onSend()
          }}>
          <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type Message Here"/>
          </form>
          
        </div>
      </div>
      <div className={"App_Right"}>
          <h1>Encrypted Message</h1>
          <p>{ciphertext}</p>
      </div>
    </div>
  );
}

export default Chat;