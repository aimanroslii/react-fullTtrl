import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import './App.css'

//HOW TO STYLE REACT COMPONENTS WITH CSS
//1.EXTERNAL
//2.MODULES
//3.INLINE

//props = read-only properties that are shared between components.
//        A parent component can send data to a child component.
//        <Component key=value /> 

function App() {

  return (
    <>
      <Student name="Spongebob" age = {30} isStudent={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student/>
      {/* <Button/> */}
    </>
  )
}

export default App
