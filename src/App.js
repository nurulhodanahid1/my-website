import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import ScrollUpButton from "react-scroll-up-button";

function App() {
  return (
    <div>
      <Home></Home>
      <ScrollUpButton />
    </div>
  );
}

export default App;
