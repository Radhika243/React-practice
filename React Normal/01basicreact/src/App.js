 import 'bootstrap/dist/css/bootstrap.min.css'
import  Button  from "react-bootstrap/Button";
import Employees from './components/Employees';
import Login from './Forms/Login';
function App() {
  const success = () =>{
    document.body.style.backgroundColor = 'green'
  }
  return (
    <div className="App">
    
    <Login />
    </div>
  );
}

export default App;
