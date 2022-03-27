import NavbarF from './Components/NavbarF';
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <NavbarF />
      <Container>
        {/* <Login /> */}
        <Register />

      </Container>
    </div>
  );
}

export default App;
