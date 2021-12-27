import logo from './logo.svg';
import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Message/>
            <Counter/>
            <Greet/>
            <Welcome name="Tino" lastName="Vino"/>
           {/*   <Greet name="Bruce" lastName="Green">
                <p>Hello</p>
            </Greet>
            <Greet name="Tino" lastName="Vino">
                <button>Button</button>
            </Greet>
            <Greet name="Victor" lastName="Vran">
                <p>Welcome</p>
            </Greet>
            <Welcome name="Bruce" lastName="Green" />
            <Welcome name="Tino" lastName="Vino" />
                  <Welcome/>
        <Hello/>*/}
        </div>
    );
}

export default App;
