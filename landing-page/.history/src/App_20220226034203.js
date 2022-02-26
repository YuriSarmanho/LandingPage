import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Info from "./Components/Info";
import Shoe from './images/shoe.jpg'
import './style/app.css'

const App = () => {
  return (
    <>
      <img src={Shoe} className='hero-img'/>
      <div className="wrapper">
        <Header />
        <Hero />
        <Info />
      </div>
    </>
  );
};

export default App;
