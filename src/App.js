import logo from './logo.svg';
import './App.css';
import SearchMovies from './components/searchMovie';

function App() {
  return (
    <div className="container">
      <h1 className='title'>React Movie Search</h1>

      <SearchMovies/>
    </div>
  );
}

export default App;
