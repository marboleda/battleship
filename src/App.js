import './App.css';
import Grid from './components/Grid'

function App() {
  return (
    <div className="App">
      <div id="game">
        <Grid playerType="h" />
        <Grid playerType="c" />
      </div>
    </div>
  );
}

export default App;
