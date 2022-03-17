import React, { useState } from 'react'
import Style from '../CSS/Style.module.css'

export default function Appointments() {
  const [appointments, setAppointments] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const isValide = () =>{
    return(name.length && date.length && time.length)
  }

  const addAppointments = () =>{
    let temp = [...appointments];
    let newMessage = {
      name:name,
      date: date,
      time: time };
  temp.push(newMessage)
  setAppointments(temp)
  }
  return (
    <div>
        <h2 className={Style.appointmentsHeader}>קביעת תורים</h2>
        <form onSubmit={(e)=>{
          e.preventDefault();
          if(isValide()){
            addAppointments();
          }
        }}>
            <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='enter your name'/><br />
            <input onChange={(e)=>setDate(e.target.value)} type="date" /><br />
            <input onChange={(e)=>setTime(e.target.value)} type='time' /><br /> <br />
            <button type='submit'>קבע תור</button>
        </form> <br />
        <section className={Style.appointmentsTableContainer}>
        {appointments.map((mes,i)=>{
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
                  </tr>
              </tbody>
          </table>
          )
        })}</section>
    </div>
  )
}
