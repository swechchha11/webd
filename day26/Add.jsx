import {useState} from "react";
const Add = () => {
    const [item , setItem]=useState("");
    const [items , setItems]=useState("");
    return (<div>
        <div>
            <input type ="text" placeholder="Username...." 
            value={item}
            onChange={(e) => {
                setItem(e.target.value);
            }}/>
            </div>

            <div>
           <input type ="text" placeholder="Email..." 
            value={items}
            onChange={(e) => {
                setItems(e.target.value);}}/>
                <p><b>Username: {item}</b></p>
     <p><b>Email: {items}</b></p>
        </div>
        </div>
    );
};
export default Add;