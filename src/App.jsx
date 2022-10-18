//import './App.css';
import './scss/reset.scss';
import './scss/base.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;