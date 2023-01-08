import React, { useEffect, useState } from 'react';
import Style from '../CSS/Style.module.css';
import axios from 'axios'

export default function Messages() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [showMessages, setShowMessages] = useState('none')
    const [messagesDetails, setMessagesDetails] = useState([]);
    const [messagesCounter, setMessagesCounter] = useState(0);

    useEffect(()=>{
        getAllMessages();
    },[])

    const isValide = () =>{
        return(name.length && number.length && message.length),alert("מלא את השדות")
    }

    const getAllMessages = () =>{
        axios
        .get('http://localhost:8080/messages/')
        .then(res=>{
            setMessagesDetails(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const createMessage = ()=>{
        axios
        .post('http://localhost:8080/messages/',{
            name:name,
            number:number,
            message:message,
            time: new Date().getHours()+':'+new Date().getMinutes()+':'+new Date().getSeconds(),
            date: new Date().getDate()+'/'+ (new Date().getMonth()+1)+'/'+new Date().getFullYear()
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const deleteMessage = (i,id)=>{
        axios
        .delete(`http://localhost:8080/messages/:${id}`)
        .then(res=>{
            console.log('got it');
            let temp = [...res.data];
            console.log(temp);
            temp.splice(i,1)
            setMessagesDetails(temp)
            setMessagesCounter(messagesCounter-1);
        })
        .catch(err=>{
            console.log(err.response);
        })
    }

  return (
    <div>
            <h2 className={Style.messagesHeader}>הודעות</h2>
            <h3>השאר הודעה לאלי</h3>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(isValide()){
                    createMessage();
                    getAllMessages();

                }
            }}>
                <label> : שם פרטי</label><br />
                <input onChange={(e)=>setName(e.target.value)} className={Style.messagesInput}  type="text" placeholder='enter your name' /> <br /><br />  
                <label> : מס' טלפון</label><br /> 
                <input onChange={(e)=>setNumber(e.target.value)} className={Style.messagesInput} type="number" placeholder='enter your number' /><br /><br />
                <label> : השאר הודעה</label><br />
                <textarea onChange={(e)=>setMessage(e.target.value)} className={Style.messagesInput} cols="20" rows="3" placeholder='enter your message'></textarea><br /> <br />
                <button type='submit' className={Style.inputsButton} >שלח הודעה</button>
            </form> <br />
            <h4 className={Style.messagesCounter}> messages: {messagesCounter}</h4>
            <button onClick={()=>getAllMessages()} className={Style.inputsButton} >show messages</button>
            <section className={Style.messagesContainer}>
                  {messagesDetails.map((mes,i)=>{
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
                                    <td><img style={{borderRadius: '50%',cursor: 'pointer'}} width='30px' height='30px' src='https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png' onClick={()=>{deleteMessage(i,mes._id)}} alt='delete message'/></td>
                                </tr> 
                            </tbody>
                        </table>
                    )
                })} 
            </section>
    </div>
  )
}
