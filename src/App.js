import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
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
    </div>
  );
}

export default App;
