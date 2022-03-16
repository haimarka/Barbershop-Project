import React, { useState } from 'react';
import Style from '../CSS/Style.module.css';

export default function Messages() {
    const [messages, setMessages] = useState([
        <table>
            <tbody>
        <tr>
            <th>new message from:</th>
            <td>itzhak tzaga</td>
            <td>date: 12/3/22</td>
            <td>time: 08:40</td>
            <td>0526122936</td>
            <td>message: thanks for the hair cut</td>
        </tr>
        <tr>
            <th>new message from:</th>
            <td>menashe alamo</td>
            <td>date: 17/3/22</td>
            <td>time: 11:05</td>
            <td>0526122936</td>
            <td>message: thanks for the hair cut</td>
        </tr>
        <tr>
            <th>new message from:</th>
            <td>elad gete</td>
            <td>date: 18/3/22</td>
            <td>time: 18:20</td>
            <td>0526122936</td>
            <td>message: thanks for the hair cut</td>
        </tr>
        </tbody>
    </table>]);

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')

    const addMessage = () =>{
        let temp = [messages];
        let newMessage = name
        temp.push(newMessage)
        setMessages(temp)
    }
  return (
    <div>
            <h2>הודעות</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                console.log(name, number, message);
                addMessage();
            }}>
                <input onChange={(e)=>setName(e.target.value)}  type="text" placeholder='enter your name' /> <br />
                <input onChange={(e)=>setNumber(e.target.value)} type="number" placeholder='enter your number' /><br />
                <textarea onChange={(e)=>setMessage(e.target.value)} cols="20" rows="3" placeholder='enter your message'></textarea><br />
                <button type='submit'>שלח הודעה</button>
            </form> <br />
            <section className={Style.messagesContainer}>
                {messages.map((img,i)=>{
                    return (
                        <div key={i}>
                            {img}
                        </div>
                    )
                })}    
            </section>
    </div>
  )
}
