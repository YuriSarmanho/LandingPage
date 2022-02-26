import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import 
import './style/app.css'

const App = () => {
  return (
    <>
      <img  className='hero-img'/>
      <div className="wrapper">
        <Header />
        <Hero />
        <Info />
      </div>
    </>
  );
};

export default App;
