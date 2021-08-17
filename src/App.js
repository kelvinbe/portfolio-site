import logo from './logo.svg';
import './index.css'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import About from './components/About me/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <div>
     <NavBar/>
   </div>
   <div>
     <Home />
   </div>
   <div>
    <About />
   </div>
    </div>
  );
}

export default App;
