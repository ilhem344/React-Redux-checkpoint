import './App.css';
import Addtask from './Components/Addtask';
import Listtask from './Components/Listtask'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Addtask />
       <Listtask />
      </header>
    </div>
  );
}

export default App;
