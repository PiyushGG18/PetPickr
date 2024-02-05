import "./App.css";
import Categories from "./components/Categories/Categories";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <div className="App">
        <Hero />
        <Categories />
        <Reasons />
        <Plans />
        <Testimonials />
      </div>
    </>
  );
}

export default App;
