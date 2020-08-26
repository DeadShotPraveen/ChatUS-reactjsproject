import React,{useState,useEffect} from 'react';
import {Avatar} from "@material-ui/core";
import db from "./firebase";
import {Link} from "react-router-dom";
import '../styling/SidebarChat.css';

function SideBarChat({ id,name,addNewChat }) {

    const [seed,setSeed] = useState("");
    const [messages,setMessages] = useState("");

    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').
            onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => 
                    doc.data()
                ))
            ));
        }
    },[]) ;   

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const createChat = () => {
       const roomName = prompt("please enter name for chat room");
       if(roomName){
           db.collection("rooms").add({
               name : roomName,
           }) 
       } 
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarchat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className = "sidebarchat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className='sidebarchat'>
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SideBarChat
