import React ,{FC ,useState, useEffect,useContext,ReactElement} from 'react';
import logo from './logo.svg';
import ThemeContext from './themecontext'
import ThemeToggle from './ThemeToggle'
import TodoList from "./TodoList";
import './App.css';
// interface AppProps{
//   title:string,
//   description:string

// }
// const App  = ({title, description } : AppProps) => {

//   return (
//     <div className="App">
     
//      <h1>{title}</h1>
//      <h2>{description}</h2>
//     </div>
//   );
// }

const App  = () => {
  const [counter,setCounter] = useState<number| null>(null);
   const[theme, setTheme]=useState<boolean>(false)
  useEffect(() => {
    setCounter(1)
  },[])
  

    return (
      <ThemeContext.Provider value={{theme,setTheme}}>
        
      <div className="App">
        {counter !== null ? (
      <button onClick ={() => {
        setCounter(counter+1)
           }}>{counter}</button>
        ): null}
    <ThemeToggle></ThemeToggle>
        
     </div>
     </ThemeContext.Provider>
   );
   }





export default App;
