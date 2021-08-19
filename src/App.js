import logo from './logo.svg';
import './index.css'
import './App.css';
import {Route,Switch, BrowserRouter, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Pages from './pages/index'
import About from './components/About me/About';
import Portfolio from './components/Portfolio/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 <BrowserRouter> 
<div className="App">
<NavBar />
  <Switch> 
<Route path="/" component={Pages} exact />
<Route path="/about" component={About} />
<Route path="/portfolio" component={Portfolio} />

   </Switch>

   </div>
   </BrowserRouter>  
  );
}

export default App;
