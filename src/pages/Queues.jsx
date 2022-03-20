import React, { useState } from 'react'
import Style from '../CSS/Style.module.css'

export default function Queues() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [turns, setTurns] = useState('none')
  const [queues, setQueues] = useState([])
  const [queuesCounter, setQueuesCounter] = useState(0)
  // console.log(new Date().getDate()+'/'+ (new Date().getMonth()+1)+ '/' + new Date().getFullYear());
  const isValide = () =>{
    return(name.length && date.length && time.length)
  }

  const addQueues = () =>{
    let temp = [...queues];
    let newQueue = {
      name:name,
      date: date,
      time: time };
  temp.push(newQueue)
  setQueuesCounter(queuesCounter+1)
  setQueues(temp)
  }

  const removeQueues = (i) =>{
    let temp = [...queues];
    temp.splice(i,1)
    setQueuesCounter(queuesCounter-1)
    setQueues(temp)
}
  const style = {display: turns?'none':'block'};
  return (
    <div>
        <h2 className={Style.queuesHeader}>קביעת תורים</h2>
        <form onSubmit={(e)=>{
          e.preventDefault();
          if(isValide()){
            addQueues();
          }
        }}>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name'/><br />
            <input onChange={(e)=>setDate(e.target.value)} defaultValue={new Date().getDate()+'/'+(new Date().getMonth()+1)+'/'+new Date().getFullYear()}  type="date" /><br />
            <input onChange={(e)=>setTime(e.target.value)} defaultValue={new Date().getHours()+':'+new Date().getMinutes()} type='time' /><br /> <br />
            <button type='submit'>קבע תור</button>
        </form> <br />

        <h4> queues: {queuesCounter}</h4>
        <div className={Style.queuesPopOut} style={style}><br />
          <h3>תספורות</h3>
          <h4>מחיר לילד....................................35</h4>
          <h4>מחיר למבוגר................................45</h4>
          <h4>מחיר לאישה................................55</h4>
          <img onClick={()=>setTurns(!turns)} className={Style.queuesCloseButton} width='35px' height='35px' src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png" alt="" />
        </div>
        
        <button onClick={()=>{setTurns(!turns)}}>מחירים</button>
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
                      <td>{mes.time}</td>
                      <td><img style={{borderRadius: '50%',cursor: 'pointer'}} width='30px' height='30px' src='https://www.seekpng.com/png/detail/202-2022743_edit-delete-icon-png-download-delete-icon-png.png' onClick={()=>removeQueues(i)}/></td>
                  </tr>
              </tbody>
          </table>
          )
        })}</section>
    </div>
  )
}
