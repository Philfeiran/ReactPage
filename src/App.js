
import './App.css';
import List from './List';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <a className="header-title">Team Board</a>
      </header>
      <div className="App-body">
          <List title="To do"></List>
          <List title="In Progress"></List>
          <List title="Done"></List>

          <List title="Note and reference"></List>
      </div>
    </div>
  );
}

export default App;
