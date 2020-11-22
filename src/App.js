import './App.css';
import Grid from './components/Grid';
import styled from 'styled-components';

const Game = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-between;
  margin: 0 auto;
`;

function App() {
  return (
    <div className="App">
      <Game id="game">
        <Grid playerType="h" />
        <Grid playerType="c" />
      </Game>
    </div>
  );
}

export default App;
