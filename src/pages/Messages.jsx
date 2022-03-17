import React, { useState } from 'react';
import Style from '../CSS/Style.module.css';

export default function Messages() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([]);

    const isValide = () =>{
        return(name.length && number.length && message.length)
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
        setMessages(temp)
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
            <section className={Style.messagesContainer}>
                  {messages.map((img,i)=>{
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
                                    <td>{img.name}</td>
                                    <td>{img.number}</td>
                                    <td>{img.message}</td>
                                    <td>{img.time}</td>
                                    <td>{img.date}</td>
                                </tr> 
                            </tbody>
                        </table>
                    )
                })} 
            </section>
    </div>
  )
}

 //     <table>
    //         <tbody>
    //     <tr>
    //         <th>new message from:</th>
    //         <td>itzhak tzaga</td>
    //         <td>date: 12/3/22</td>
    //         <td>time: 08:40</td>
    //         <td>0526122936</td>
    //         <td>message: thanks for the hair cut</td>
    //     </tr>
    //     <tr>
    //         <th>new message from:</th>
    //         <td>menashe alamo</td>
    //         <td>date: 17/3/22</td>
    //         <td>time: 11:05</td>
    //         <td>0526122936</td>
    //         <td>message: thanks for the hair cut</td>
    //     </tr>
    //     <tr>
    //         <th>new message from:</th>
    //         <td>elad gete</td>
    //         <td>date: 18/3/22</td>
    //         <td>time: 18:20</td>
    //         <td>0526122936</td>
    //         <td>message: thanks for the hair cut</td>
    //     </tr>
    //     </tbody>
    // </table>