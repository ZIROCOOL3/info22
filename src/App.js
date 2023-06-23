import logo from './logo2.svg';
import './App.css';
import Noticia from './components/Noticia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Noticia />
      </header>
        
    </div>
  );
}

export default App;
