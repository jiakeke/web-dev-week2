import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Greeting message="Hello" name="John" />
      <MainContent />
      <Greeting message="See you" name="John" />
      <Footer />
    </div>
  );
}

export default App;
