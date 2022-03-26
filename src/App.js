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
   <br />
   <h2>How useState works?</h2>
   <p>useState enables to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component. Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.</p>
    </div>
  );
}

export default App;
