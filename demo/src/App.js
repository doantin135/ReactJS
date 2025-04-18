import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <EventBind /> */}
      <ParentComponent />
      {/* <FunctionClick />
       <ClassClick />  */}
      {/*<Counter />*/}
     {/*<Message /> */} 
      {/* <Greet name = "Bruce" heroName = "Batman" >
        <p>This is children props</p></Greet>
      <Greet name = "Clark" heroName = "Iroman"> 
        <button>Action</button>
      </Greet> */}
      {/* <Greet name = "Diana" heroName = "FFrrr"/>
       <Welcome name = "Bruce" heroName = "Batman"/>  */}
       {/* <Welcome name = "Clark" heroName = "Iroman"/> 
       <Welcome name = "Diana" heroName = "FFrrr"/> 
       <Hello />  */}
    </div>
  );
}

export default App;
