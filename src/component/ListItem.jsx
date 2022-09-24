// import React, {Component} from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const ListItem = ({todo}) => {
    return(
        <div style={todoItem} >
            <p>{todo}</p>
            <div>
                <Button text="Edit" variant="success"/>
                <Button text="Delete" variant="warning"/>
            </div>
        </div>
    )
}

ListItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default ListItem

const todoItem = {
    background: "#2da4f8",
    color: "#fff", 
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}