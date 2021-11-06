import './App.css';
import StartButton from './StartButton';
import Background from './BackGround';
import Footer from './Footer';

function App() {
  return (
    <body>
      <div id="wrap">
        <Background/>
      </div>
        <StartButton id='footer'/>
        <Footer/>
    </body>
  );
}

export default App;
