import React, {Component} from "react";
import Button from "./Button";
import "../css/Input.css"

class Input extends Component {
    render(){
        return(
            <div>
                <form style={todoItem}>
                    <input 
                        type="text"
                        style={input}
                        placeholder="add task"
                    />
                    <Button text="Add" variant="primary" />
                </form>
            </div>
        )
    }
}

export default Input

const todoItem = {
    background: "#ffa4f8",
    color: "#fff", 
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    border: "none",
    width: "70%",
    background: "#ffa4f8",
    color: "#fff"

}