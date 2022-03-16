import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Store from './pages/Store';
import Appointments from './pages/Appointments';
import Messages from './pages/Messages';
import Navigation from './components/Navigation';
import Style from './CSS/Style.module.css'

function App() {
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
        <Route exact path='/Appointments' render={()=><Appointments/>} />
        <Route exact path='/Messages' render={()=><Messages/>} />
      </Switch>
      <footer><h2>Barbershop Eli Godo &copy;</h2></footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
