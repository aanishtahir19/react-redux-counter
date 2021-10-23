// Importing Assets
import './App.scss';
import logo from './logo.svg'
// Importing Components
import {Counter} from './features/counter/Counter';

function App() {
  return (
    <div className="app col-10">
      <img src={logo} alt="Redux logo" className="app-logo" />
      <Counter/>
    </div>
  )
}

export default App;
