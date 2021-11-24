import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Home></Home>
    </div>
  );
}

export default App;
