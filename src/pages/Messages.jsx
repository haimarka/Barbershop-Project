import React, { useState } from 'react';
import Style from '../CSS/Style.module.css';
import axios from 'axios'

export default function Messages() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([]);
    const [messagesCounter, setMessagesCounter] = useState(0);
    

    const isValide = () =>{
        return(name.length && number.length && message.length)
    }

    const getAllMessages =() =>{
        axios
        .get('http://localhost:8080/messages/')
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const createMessage = ()=>{
        axios
        .post('http://localhost:8080/messages/',{
            name:name, number:number, message:message
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    
    const addMessage = () =>{
        let temp = [...messages];
        let newMessage = {
            name:name,
            number: number,
            message: message, 
            time: new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(),
            date: new Date().getDate()+'/'+ (new Date().getDay()-(1))+'/'+new Date().getFullYear()};
        temp.push(newMessage)
        setMessagesCounter(messagesCounter+1)
        setMessages(temp)
        createMessage();
    }

    const removeMessage = (i) =>{
        let temp = [...messages];
        temp.splice(i,1)
        setMessagesCounter(messagesCounter-1)
        setMessages(temp)
    }

    const deleteMessage = (id)=>{
        axios
        .delete(`http://localhost:8080/messages/:${id}`)
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

  return (
    <div>
            <h2 className={Style.messagesHeader}>הודעות</h2>
            <h3>השאר הודעה לאלי</h3>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(isValide()){
                    addMessage();
                }
            }}>
                <input onChange={(e)=>setName(e.target.value)}  type="text" placeholder='enter your name' /> <br />
                <input onChange={(e)=>setNumber(e.target.value)} type="number" placeholder='enter your number' /><br />
                <textarea onChange={(e)=>setMessage(e.target.value)} cols="20" rows="3" placeholder='enter your message'></textarea><br /> <br />
                <button type='submit'>שלח הודעה</button>
            </form> <br />
            <h4 className={Style.messagesCounter}> messages: {messagesCounter}</h4>
            <button onClick={()=>getAllMessages()}>getMessages</button>
            <section className={Style.messagesContainer}>
                  {messages.map((mes,i)=>{
                    return (
                        <table className={Style.messagesTableContainer} key={i}>
                            <tbody>
                                <tr>
                                    <th> </th>
                                    <th><label>name</label></th> 
                                    <th><label>number</label></th>
                                    <th><label>message</label></th>
                                    <th><label>time</label></th>
                                    <th><label>date</label></th>
                                </tr>
                                <tr>
                                    <th><img width='70px' height='70px' src="https://media.istockphoto.com/vectors/new-message-vector-icon-vector-id1016416224?k=20&m=1016416224&s=612x612&w=0&h=xC0RMnSWCh4_DIoVI-2WqkOo-S6Q9__13WJZorsoe0g=" alt="" /></th>
                                    <td>{mes.name}</td>
                                    <td>{mes.number}</td>
                                    <td>{mes.message}</td>
                                    <td>{mes.time}</td>
                                    <td>{mes.date}</td>
                                    <td><img style={{borderRadius: '50%',cursor: 'pointer'}} width='30px' height='30px' src='https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png' onClick={()=>{removeMessage(i);deleteMessage(mes._id);}}/></td>
                                </tr> 
                            </tbody>
                        </table>
                    )
                })} 
            </section>
    </div>
  )
}
