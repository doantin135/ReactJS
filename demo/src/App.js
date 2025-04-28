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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Person from './components/Person';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
function App() {
  return (
    <div className="App">
      {/* <NameList /> */}
      {/* <StyleSheet primary = {true} /> */}
      <Inline />
      {/* <Person /> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
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
