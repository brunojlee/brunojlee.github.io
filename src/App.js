import './App.css';
import Header from './components/Header/Header';
import background from './imgs/tempLee.png';

function App() {
  return (
    <div className="App">
      <Header />
      <a target="_blank" href="https://github.com/brunojlee">
        <img className='logoBackground' src={background} alt='logoBackground' />
      </a>
    </div>
  );
}

export default App;
