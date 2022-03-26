import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
    <Header></Header>
   <Shop></Shop>
   <h2>How React Works?</h2>
   <p>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. We can use it to help build single page applications and mobile apps, or to build complex apps if utilise it with other libraries.</p>
    </div>
  );
}

export default App;
