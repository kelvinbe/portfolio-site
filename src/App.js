import logo from './logo.svg';
import './index.css'
import './App.css';
import {Route,Switch, BrowserRouter, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import Pages from './pages/index'
import About from './components/About me/About';
import Home from './components/Home/Home';

import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import SpinnerS from './components/spinner/Spinner';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
 <BrowserRouter> 
<div className="App">
<NavBar />
  <Switch> 
<Route path="/" component={Pages} exact/>
<Route path="/about" component={About} />
<Route path="/portfolio" component={Portfolio} />
<Route path="/blog" component={Blog} />
<Route path="/contact" component={Contact} />
   </Switch>

   </div>
   </BrowserRouter>  
  );
}

export default App;
