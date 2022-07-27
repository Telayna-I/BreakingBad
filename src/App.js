import CharacterList from "./components/CharacterList/CharacterList";
import image from './assets/banner.jpg'
import './app.css'


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Breaking Bad API</h1>
      </header>
        <div className="banner">
          <img src={image}/>
        </div>
      <CharacterList/>
    </div>
  );
}

export default App;
