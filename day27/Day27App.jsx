import "./Day26Apps.css"
import Add from "./components/Add";
import Listtodo from "./components/Todolist";
function App()
{
    return(
        <div className="App">
            <h1>todo list</h1>
            <Add/>
            <Listtodo/>
        </div>
    )
}
export default App;