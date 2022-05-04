import './App.css';
import { Header } from './components/Header/index'
import { NavButton } from './components/NavButton/index'

function App() {
  return (
    <div className="App">
      <Header>
        <NavButton/>
      </Header>
    </div>
  );
}

export default App;