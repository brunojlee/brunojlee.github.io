import './App.css';
import Header from './components/Header/Header';
import background from './imgs/tempLee.png';

function App() {
  return (
    <div className="App">
      <Header />
      <img className='logoBackground' src={background} alt='logoBackground' />
    </div>
  );
}

export default App;
