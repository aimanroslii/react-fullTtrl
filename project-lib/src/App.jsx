import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import './App.css'

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

function App() {

  return (
    <>
      <UserGreeting isLoggedIn = {true} username= "John Wick"/>
      <UserGreeting isLoggedIn = {true} />
      {/* <Student name="Spongebob" age = {30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student/>
      <Button/> */}
    </>
  )
}

export default App
