import {useState} from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../action";
const Add = () => {
    const [item , setItem]=useState("");
    const dispatch=useDispatch();
    return (<div>
        
            <input type ="text" placeholder="addtodo...." 
            value={item}
            onChange={(e) => {
                setItem(e.target.value);
            }}/>
            <button onClick ={() => {
                dispatch(addItem(item));
                setItem("");
            }}>
                add</button>

           
           
     
        
        </div>
    );
};
export default Add;