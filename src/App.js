
// import { Navbar } from 'reactstrap';
import './App.css';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import Login from './components/login/Login';



function App() {
  return (
    <div>
      <Background/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
