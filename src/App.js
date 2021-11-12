import './App.css';
import StartButton from './StartButton';
import Background from './BackGround';
import Footer from './Footer';
import Welcome from './Welcome'

function App() {
  return (
    <body>
      <div id="wrap">
        <Background/>
        <Welcome />
      </div>
        <StartButton id='footer'/>
        <Footer id='footer-forreal'/>
    </body>
  );
}
// note
export default App;
