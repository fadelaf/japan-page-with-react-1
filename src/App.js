import './App.css';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import MainImage from './components/MainImage';
import ValuesProduct from './components/ValuesProduct';
import Information from './components/Information';
import Schedule from './components/Schedule';
import News from './components/News';
import SocialMedia from './components/SocialMedia';

function App() {
  const text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ab expedita ratione quis culpa? Voluptatem vitae, alias consequatur modi placeat vero, impedit magni quia necessitatibus est expedita dolores cupiditate quidem!"

  return (
    <div className="main-container">
      <div className="container header">
        <Logo/>
        <Navbar/>
      </div>
        <MainImage/>
        <ValuesProduct text={text} />
        <Information text={text}/>
      <div className="container more">
        <Schedule />
        <News text={text}/>
        <SocialMedia />
      </div>
      <div className="container footer">
        Copyright Me
      </div>
    </div>
  );
}

export default App;
