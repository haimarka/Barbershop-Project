import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Store from './pages/Store';
import Queues from './pages/Queues';
import Messages from './pages/Messages';
import Login from './pages/Login';
import Register from './pages/Register';
import Navigation from './components/Navigation';
import Style from './CSS/Style.module.css'
import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(null);
  // const AUTH_LOCAL_STORAGE = 'Users';

  // const logOutHeandler = () => {
  //   localStorage.setItem(AUTH_LOCAL_STORAGE, JSON.stringify(""));
  //   setAuth(null);
  //   document.location.href = "/";
  // };
  
  // const getUserFromStorage = ()=>{
  //   let authStorage = JSON.parse(localStorage.getItem(AUTH_LOCAL_STORAGE));
  //   return authStorage ? setAuth(authStorage.data) : null;
  // }  

  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      <h1>Barbershop</h1>
      {/* <img src="https://ilansasson.co.il/wp-content/uploads/2016/12/accessories.png" alt="hair condishiners" /> */}
      <Switch>
        <Route exact path='/' render={()=><Home/>} />
        <Route exact path='/About' render={()=><About/>} />
        <Route exact path='/Gallery' render={()=><Gallery/>} />
        <Route exact path='/Store' render={()=><Store/>} />
        <Route exact path='/Queues' render={()=><Queues/>} />
        <Route exact path='/Messages' render={()=><Messages/>} />
        <Route exact path='/Login' render={()=><Login auth={auth} setAuth={setAuth}/>} />
        <Route exact path='/Register' render={()=><Register auth={auth} setAuth={setAuth}/>} />
      </Switch>
      <footer>
        <h2>Barbershop Eli Godo &copy;</h2>
        <a href='https://www.instagram.com/godohaircut/'><img className={Style.footerNavigation} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/800px-Instagram-Icon.png" alt="Eli's Instegram" title="Eli's Instegram"/></a>
        <a href='https://m.facebook.com/profile.php?id=100000254200240'><img className={Style.footerNavigation} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/640px-Facebook_icon.svg.png" alt="Eli's Facbook" title="Eli's Facbook"/></a>
        <a href='https://www.whatsapp.com/'><img className={Style.footerNavigation} src="https://e7.pngegg.com/pngimages/829/586/png-clipart-whatsapp-logo-whatsapp-logo-desktop-computer-icons-viber-grass-viber.png" alt="Eli's WhatsApp" title="Eli's WhatsApp"/></a>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
