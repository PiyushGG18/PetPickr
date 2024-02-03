
import './App.css';
import Categories from './components/Categories/Categories';
import Hero from './components/Hero/Hero';
import Reasons from './components/Reasons/Reasons';

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <Categories />
        <Reasons/>
      </div>
    </>
  );
}

export default App;
