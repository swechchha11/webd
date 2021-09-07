import { useState } from 'react';
import { useDispatch , useSelector} from "react-redux";
// import { IncCounter, DecCounter } from './actions';
import { reducerType} from "./reducers";
import { AddNote, DeleteNote} from "./actions";


import './App.css';

function App() {
  // const counter = useSelector((state: reducerType) => state.counter);
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>("");
  return (
    <div className="App">
      {/* <button onClick={() => {
        dispatch(DecCounter(2));
      }}>-</button>
      <div>
        {counter}
      </div>
      <button onClick={() => {
        dispatch(IncCounter(2));
      }}>+</button> */}
      <div>
        
      <input 
      type="text"
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
      }}
      />
      <button onClick={() => {
        dispatch(AddNote(input));
        setInput("");

      }}>Add</button>
      </div>
      <div className="notes">
        <ul>
        {notes.map((note: string, index: number) => (
          <li key={index}>
            <h3>{note}</h3><button 
            onClick={() => {
              dispatch(DeleteNote(index));
            }}>Delete</button>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
