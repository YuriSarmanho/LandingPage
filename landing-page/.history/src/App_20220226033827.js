import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import './style/app.css'
const App = () => {
  return (
    <>
      <div className='hero-svg'/>
      <div className="wrapper">
        <Header />
        <Hero />
        <Info />
      </div>
    </>
  );
};

export default App;
