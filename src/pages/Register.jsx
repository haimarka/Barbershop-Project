import React, { useState } from 'react'

export default function Register(auth,setAuth) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function firstTry() {
        console.log(email,password);
    }
  return (
    <div>
        <h1>הרשמה</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            firstTry();
        }}>
            <label>: אימייל</label><br />
            <input type="email" onChange={(e)=>setEmail(e.target.value)} /><br />
            <label>: סיסמה</label><br />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} /><br />
            <button type='submit'>Sign in</button>
        </form>
    </div>
  )
}
