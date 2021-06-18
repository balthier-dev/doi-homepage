import logo from './Resource/2.png';
import particle from './Resource/3.png'
import bg from './Resource/4.png';
import line from './Resource/5.png'
import './App.css';
import {Header} from './Header'

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Header></Header>
      </header>
      <div className="App-div">
        <img src={logo} className="doi-logo"/>
        <img src={particle} className="doi-particle"/>
        <img src={line} className="doi-line"/>
        <img src={bg} className="doi-bg"/>
      </div>
    </div>
  );
}

export default App;
