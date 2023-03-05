import '../scss/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartScreen } from './StartScreen';
import Results from './Results';
import Trivia from './Trivia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<StartScreen/>}/>
        <Route path='/trivia' element={<Trivia/>}/>
        <Route path='/results' element={<Results/>}/>
      </Routes>
    </Router>
  );
}

export default App;
