import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from '../CSS/Style.module.css'

export default function Queues() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [turns, setTurns] = useState('none')
  const [queues, setQueues] = useState([])
  const [queuesCounter, setQueuesCounter] = useState(0);

  useEffect(()=>{
    getAllQueues();
  },[])
  const isValide = () =>{
    return(name.length && date.length && time.length),alert("מלא את השדות")
  }

  const getAllQueues = () =>{
    axios
    .get('http://localhost:8080/queues/')
    .then(res=>{
      setQueues(res.data);
    })
    .catch(err=>{
        console.log(err);
    })
}

const createQueues = ()=>{
  axios
  .post('http://localhost:8080/queues/',{
    name:name,
    date: date,
    queue_Time: time
  })
  .then(res=>{
      console.log(res.data);
      setQueuesCounter(queuesCounter+1)
  })
  .catch(err=>{
      console.log(err);
  })
}
  const removeQueues = (i) =>{
    let temp = [...queues];
    // console.log(temp[i]._id);
    // let id = temp[i]._id;
    temp.splice(i,1)
    setQueuesCounter(queuesCounter-1)
    setQueues(temp)
}
// console.log(new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear());
  const style = {display: turns?'none':'block'};
  return (
    <div>
        <h2 className={Style.queuesHeader}>קביעת תורים</h2>
        <form onSubmit={(e)=>{
          e.preventDefault();
          if(isValide()){
            createQueues();
            getAllQueues();
          }
        }}>
            <label> : שם פרטי</label><br />
            <input onChange={(e)=>setName(e.target.value)} className={Style.queuesInput} type="text" placeholder='enter your name'/><br /><br />
            <label> : תאריך</label><br />
            <input onChange={(e)=>setDate(e.target.value)} className={Style.queuesInput} type="date"/><br /><br />
            <label> : שעת תור</label><br />
            <input onChange={(e)=>setTime(e.target.value)} className={Style.queuesInput} defaultValue={new Date().getHours()+':'+new Date().getMinutes()} type='time' /><br /> <br />
            <button type='submit' className={Style.inputsButton} >קבע תור</button>
        </form> <br />

        <h4> queues: {queuesCounter}</h4>
        <div className={Style.queuesPopOut} style={style}><br />
          <h3>תספורות</h3>
          <h4>מחיר לילד....................................35</h4>
          <h4>מחיר למבוגר................................45</h4>
          <h4>מחיר לאישה................................55</h4>
          <img onClick={()=>setTurns(!turns)} className={Style.queuesCloseButton} src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png" alt="" />
        </div>
        
        <button onClick={()=>{setTurns(!turns)}} className={Style.inputsButton} >מחירים</button> <br /> <br />
        <section className={Style.queuesTableContainer}>
        {queues.map((mes,i)=>{
          return(
          <table key={i}>
              <tbody>
                  <tr>
                      <th> </th>
                      <th><label>name</label></th> 
                      <th><label>date</label></th>
                      <th><label>time</label></th>
                  </tr>
                  <tr>
                      <th><img width='70px' height='70px' src="https://cdn0.iconfinder.com/data/icons/haircut/100/icon_hair_cut-13-512.png" alt="" /></th>
                      <td>{mes.name}</td>
                      <td>{mes.date}</td>
                      <td>{mes.queue_Time}</td>
                      <td><img style={{borderRadius: '50%',cursor: 'pointer'}} width='30px' height='30px' src='https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png' onClick={()=>removeQueues(i)}/></td>
                  </tr>
              </tbody>
          </table>
          )
        })}</section>
    </div>
  )
}
