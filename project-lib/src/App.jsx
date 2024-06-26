// import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button from './Button.jsx'
import MyComponent from './MyComponent.jsx'
import Counter from './Counter.jsx'
import './App.css'
import SecComponent from './SecComponent.jsx'
import ColorPicker from './ColorPicker.jsx'
import UpdaterComponent from './UpdaterComponent.jsx'
import ObjectComponent from './ObjectComponent.jsx'
import UpArrayComponent from './UpArrayComponent.jsx'
import ArrayObjectComponent from './ArrayObjectComponent.jsx'
import ToDoList from './ToDoList.jsx'
import Effect from './Effect.jsx'
import DigitalClock from './DigitalClock.jsx'
import ComponentA from './ComponentA.jsx'
import ComponentE from './ComponentE.jsx'
import Stopwatch from './Stopwatch.jsx'

//HOW TO STYLE REACT COMPONENTS WITH CSS
//1.EXTERNAL
//2.MODULES
//3.INLINE

//props = read-only properties that are shared between components.
//        A parent component can send data to a child component.
//        <Component key=value /> 

//conditional rendering = allows you to control what gets rendered 
//                        in your application based on certain conditions
//                        (show, hide, or change components)

//click event = An interacting when a user clicks on a specific element.
//              We can respond to clicks by passing
//              a callback to the onClick event handler.

//React hook = Special function that allows functional components
//             to use React features without writing class components (React v16.8)
//             (useState, useEffect, useContext, useReducer, useCallback, and more ...)

//useState() = A react that allows the creation of a stateful variable AND a setter function
//             to update its value in the Virtual DOM. [name, setName]

function App() {
  // const fruits = [{id:1,name: "apple", calories: 95}, 
  //                 {id:2,name: "orange", calories: 45}, 
  //                 {id:3,name: "banana", calories: 105}, 
  //                 {id:4,name: "coconut", calories: 159}, 
  //                 {id:5,name: "pineapple", calories: 37}];

  // // const fruits = [];

  // const vegetables = [{id:6,name: "potatoes", calories: 110}, 
  //                     {id:7,name: "celery", calories: 15}, 
  //                     {id:8,name: "carrots", calories: 25}, 
  //                     {id:9,name: "corn", calories: 63}, 
  //                     {id:10,name: "broccoli", calories: 37}];

  //React hook = Special function that allows functional components
  //             to use React features without writing class components (React v16.8)
  //             (useState, useEffect, useContext, useReducer, useCallback, and more...)

  //useState() = A React hook that allows the creation of a stateful variable
  //             AND a setter function to update its value in the Virtual DOM.
  //             [name, setName]

  //onChange = event handler used primarily with form elements
  //           ex. <input>, <textarea>, <select>, <radio>
  //           Triggers a function every time the value of the input changes

  //useContext() = React Hook that allows you to share values 
  //               between multiple levels of components
  //               without passing props through each level

  //useRef() = "use Reference" Does not cause re-renders when its value changes.
  //            When you want a component to "remember" some information,
  //            but you dont want that information to trigger new renders.  
  //            1. Accessing/Interacting with DOM elements
  //            2. Handling Focus, Animations, and Transitions
  //            3. Managing Timers and Intervals.


  return (
    <>
      <Stopwatch/>
      {/* <ComponentE/>
      <ComponentA/>
      <DigitalClock/>
      <Effect/>
      <ToDoList/>
      <ArrayObjectComponent/>
      <UpArrayComponent/>
      <ObjectComponent/>
      <UpdaterComponent/>
      <ColorPicker/>
      <SecComponent/>
      <Counter/>
      <MyComponent/>
      <Button/>
      {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
      <UserGreeting isLoggedIn = {true} username= "John Wick"/>
      <UserGreeting isLoggedIn = {true} />
      <Student name="Spongebob" age = {30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student/>
      <Button/> */}
    </>
  )
}

export default App
